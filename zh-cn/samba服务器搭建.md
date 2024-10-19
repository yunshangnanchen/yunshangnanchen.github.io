# samba服务器搭建 挂载远程目录 & 常用配置参数介绍

已于 2024-5-26 01:56:10 修改

- samba服务器搭建 挂载远程目录 \& 常用配置参数介绍
  - [samba服务器端配置参数介绍](#samba服务器端配置参数介绍)
  - [samba 服务器安装配置：](#samba-服务器安装配置)
  - [客户端挂载：](#客户端挂载)
  - [N1-armbian开机挂载远程共享文件夹（SMB）](#n1-armbian开机挂载远程共享文件夹smb)

samba 直接复用linux的用户，但是Linux 用户的密码和 smbpasswd 设置的密码是分开的。

Linux 用户的密码是存储在 Linux 系统的用户数据库中，通常是 /etc/shadow 文件中以加密形式存储的。Samba 用户的密码是存储在专门的 Samba 密码数据库中

smbpasswd -a username 命令为指定的用户名创建 Samba 密码。这将允许用户通过 Samba 访问资源。

更改 Samba 用户密码：使用 smbpasswd username 命令

禁用 Samba 用户密码：使用 smbpasswd -d username 命令

删除 Samba 用户密码：使用 smbpasswd -x username

## samba服务器端配置参数介绍
security参数(默认为user)

1）share：表示匿名登录，不需要samba账户就可登陆samba服务器。即用户访问Samba Server不需要提供用户名和口令, 安全性能较低。

2）user：表示系统账户要先添加进samba库然后变成samba用户，使用samba用户来登陆，简单来讲就是需要使用用户密码登录。Samba Server共享目录只能被授权的用户访问,由Samba Server负责检查账号和密码的正确性。账号和密码要在本Samba Server中建立。安全性能适中。

3）server：表示由另外一台 samba 服务器来对用户进行身份验证。依靠其他Windows NT/2000或Samba Server来验证用户的账号和密码,是一种代理验证。此种安全模式下，系统管理员可以把所有的Windows用户和口令集中到一个NT系统上，使用Windows NT进行Samba认证, 远程服务器可以自动认证全部用户和口令，如果认证失败，Samba将使用用户级安全模式作为替代的方式。安全性能最高。

4）domain：表示把 samba 服务器加入到N 域，由NT的域控制器来进行身份验证。域安全级别,使用主域控制器(PDC)来完成认证。

5）ADS：（Active Directory Service，活动目录服务），是samba3.0中新增的身份验证方式，采用ADS验证方式，samba服务器集成到活动目录中。

**注意：在samba4中share 和 server验证方式已被弃用。( security = share  可用 guest ok = Yes 来代替)**

允许访客访问相关参数配置：

```linux
security = user 
map to guest = Bad User #无法进行用户身份验证时将所有无效用户映射为访客用户（nobody）
guest ok = Yes #允许访客访问，一般和public结合使用 二者需都为YES才生效。 未通过smbpasswd创建samba密码的linux用户可直接登陆，不校验密码(mount -t cifs时需输入密码，但不校验密码是否正确). 设置了samba密码的用户仍会校验，密码不匹配permission deny。    smbpasswd -d ecmaster 删除后就不校验密码了
public = Yes #指定共享资源是否是公开共享，并且对所有用户可见和可访问。
```

可读可写相关参数配置：

```linux
read only = No #等价于 writeable + avaliable
 
printable = Yes  #共享资源将被视为一个打印机共享 
writeable = Yes #指定共享资源可写入
avaliable = Yes #共享资源将对客户端可见并且可以访问
```

创建新文件权限设置参数：

```linux
force create mode = 0777 #这个参数与 create mask 类似，用于强制设定在 Samba 创建新文件时的权限模式。它会覆盖文件系统上的默认权限，并强制将新创建的文件设置为指定的权限模式。例如，force create mode = 0777 表示无论默认权限是什么，新创建的文件都会被强制设置为所有者、所属组和其他用户均可读、写和执行。
create mode = 0777 #这个配置定义新创建文件的属性。Samba在新建文件时，会把dos文件的权限映射成对应的unix权限，在映射后所得的权限，会与这个参数所定义的值进行与操作。然后再和下面的force create mode进行或操作，这样就得到最终linux下的文件权限。
force create mode = 0777 # 见上面的描述。相当于此参数所设置的权限位一定会出现在文件属性中。
directory mode = 0777 # 这个配置与create mode参数类似，只是它是应用在新创建的目录上。Samba在新建目录时，会把dos–>linux映射后的文件属性，与此参数所定义的值相与，再和force directory mode相或，然后按这个值去设置目录属性。
force directory mode = 0777 # 见上面的描述。相当于此参数中所设置的权限位一定会出现在目录的属性中。
```

创建新文件所属用户和用户组参数：

```linux
force user = nobody #强制设置新创建的文件所属用户
force group = nogroup  #强制设置新创建的文件所属用户组 
```

## samba 服务器安装配置：
apt install samba

 vim /etc/samba/smb.conf #在最后面增加如下内容

 [shared]
security = user
map to guest = Bad User
path = /data
available = yes
writeable = Yes
guest ok = No
public = No
testparm -s //测试 Samba 配置并显示结果

systemctl restart smbd.service

## 客户端挂载：
apt-get install cifs-utils

apt-get install smbclient

smbclient -L 10.1.1.115 -U root //输入密码 查看smb共享出来的目录

        Sharename       Type      Comment

        ---------       ----      -------

        IPC$            IPC       IPC Service (Media server)

        shared          Disk    

手动挂载：mount -t cifs //10.1.1.115/shared /samba-data/data/ -o rw,username="root" # shared为smb的shareName

自动挂载：

vim /etc/fstab

//10.1.1.115/shared /samba-data/data/ cifs rw 0 0

mount -a 

**调整挂载参数后，需先取消挂载再重新挂载以生效： umount -lf /samba-data/data # 制取消挂载 不受device is busy影响**


## N1-armbian开机挂载远程共享文件夹（SMB）

### 安装cifs-utifs

```
sudo apt install cifs-utils
```

### 查看共享文件夹列表

```
sudo apt install smbclient
# smbclient -L ${ip_addr} -U ${username}%${password}
smbclient -L 192.168.2.10 -U smb%123456
```

**查看时注意目录层次：是否存在sda、sdb**

### 挂载测试

```
mount -t cifs -v "//192.168.2.1/test" "/mnt/test" -o username="snb",password="123456",iocharset=utf8,vers=2.0
# 填写账号密码，远程目录必须正确，本地目录要存在，vers是smaba版本
```

### 开机自动挂载

在文件/etc/fstab 最后添加以下内容，开机自动挂载

```
//192.168.2.1/test /mnt/test  cifs nofail,username=smb,password=123456,iocharset=utf8,vers=2.0    0    0
```

注意加上nofail，防止找不到远程目录挂载时启动不了系统

©著作权归作者所有,转载或内容合作请联系作者