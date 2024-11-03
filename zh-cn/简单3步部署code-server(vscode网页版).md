# 简单3步部署code-server(vscode网页版)

2021-05-27
23,393
阅读4分钟
记录网页版vscode的部署方法。

## 一、背景

近期接触到了网页版的 vscode ，名字是 code-server。

对有频繁切换电脑写代码的同学，网页版vscode无疑是绝佳的选择，使用姿势和桌面版基本无差别，无需安装环境，任何电脑只要打开网页登录即可开始写代码。必要时一头钻进网吧，即可处理紧急问题。

仓库源码地址：https://github.com/cdr/code-server
code-server 演示图片



## 二、安装介绍
code-server安装极为简单，只需简单几步。

### 1. 下载包
在此页面可看到不同版本的包：github.com/cdr/code-se…

点击下载对应系统的包，如果是 linux 可通过如下命令下载：

wget -b https://www.ivdone.top/wordpress/pic/p662/code-server-3.2.0-linux-x86_64.tar.gz
### 2. 解压

```
# 用tar命令解压
tar -zxvf code-server-3.2.0-linux-x86_64.tar.gz
# 进入目录
cd code-server-3.2.0-linux-x86_64/
```

### 3. 启动code-server

```
./code-server
```

此时可以看到终端打印的信息，上面有访问地址和登录密码：

image.png

假如你的服务器ip是 192.168.3.7 这时浏览器打开 http://192.168.3.7:8080， 即可看到登录页面：

image.png

输入密码即可看到熟悉的vscode页面：

image.png

## 三、更多自定义的功能

### 1. 修改端口；

启动时加上参数：

```
./code-server --port 8082
```

### 2. 修改登录密码；

```
export PASSWORD="your_password";
```

### 3. 后台启动，退出终端也不停止服务；
因为code-server执行以后关闭ssh会话会自动关闭程序，所以这里需要让code-server挂载在后台运行。这里需要使用守护进程的方式开启服务。

#### 方法1：使用 pm2 进程管理工具.

- code-server项目根目录修改 package.json 的 scripts，添加一行启动命令：

```
{
    "scripts": {
        "start-code-server": "./code-server --port 8082 --host 0.0.0.0 --auth password --cert /data/cert.pem --cert-key /data/cert.key",
    }
}
```

- pm2 命令启动code-server服务

```
# 安装pm2
npm install pm2 -g

# 查看进程状态列表
pm2 list

# 运行启动命令，其中 start-code-server 是在package.json中定义的启动命令
pm2 start --name "code-server" -- run start-code-server

# 查看进程日志
pm2 log code-server

# 关闭code-server服务
pm2 stop code-server
```

- pm2 list 命令查看进程列表状态

image.png

更多pm2使用方式见：pm2使用简介

### 方法2：使用tmux

```
tmux一般都可以通过linux的包管理器安装。
# Ubuntu 或 Debian
sudo apt-get install tmux

# CentOS 或 Fedora
sudo yum install tmux
```

- 创建一个新的会话。

```
tmux new -s code_server
```

- 在新会话中执行code-server启动指令即可。 关闭ssh会话以后程序继续在后台运行。

```
code-server --cert [你的证书存放路径] --cert-key [你的key路径] --bind-addr 0.0.0.0:[你的端口号]
```

- 需要再查看code-server运行状态的话，只需要访问code_server会话就行了。

```
# 接入code_server会话
tmux a -t code_server
# 杀掉code_server会话
tmux kill-session -t code_server
```

具体使用方式可以参考: Tmux 使用教程
### 4. 启动https；
如果需要启用https服务的话则需要提供你域名的ssl认证证书路径。

如何为网站制作证书的教程参考：10分钟免费将网站升级为https

https设置需要你有一个已经认证过的域名并且本地保存了证书和key。

在指令后面添加两个参数。

- cert: 认证证书的路径（.pem或者.crt）
- cert-key: 证书key的路径（.key）

```
code-server --port 8082 --cert /data/cert.pem --cert-key /data/cert.key
```

接下来即可用https访问了：https://192.168.3.7:8082

### 5. 使用二级域名访问，而非端口访问；
使用nginx设置代理即可：

其中your_server_name是你的域名

```
server {
    listen 80;    # 监听端口
    server_name code.your_server_name;       # 域名
    # nginx请求日志地址
    access_log  /usr/local/webserver/nginx/logs/code.access.log;  
    location / {
        proxy_pass  http://localhost:8082;
        proxy_redirect     off;
        proxy_set_header   Host             $host;          # 传递域名
        proxy_set_header   X-Real-IP        $remote_addr;   # 传递ip
        proxy_set_header   X-Scheme         $scheme;        # 传递协议
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_set_header   Accept-Encoding  gzip;
        # code-server的websocket连接需要Upgrade、Connection这2个头部
        proxy_set_header   Upgrade          $http_upgrade;
        proxy_set_header   Connection       upgrade; 
    }
}
```

这样即可用二级域名访问了：http://code.your_server_name

- 如果需要 https 的代理则这样设置

```
server {
    listen 443 ssl;                     # 监听端口
    server_name code.alanyf.site;       # 域名
    # nginx请求日志地址
    access_log  /usr/local/webserver/nginx/logs/code.access.log;

    # ssl证书地址
    ssl on;
    ssl_certificate      /data/cert.pem;    # pem文件的路径
    ssl_certificate_key  /data/cert.key;    # key文件的路径
    
    # ssl验证相关配置
    ssl_session_timeout  5m;             # 缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;                # 加密算法
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # 安全链接可选的加密协议
    ssl_prefer_server_ciphers on;        # 使用服务器端的首选算法

    location / {
        proxy_pass  https://localhost:8084;
        proxy_redirect     off;
        proxy_set_header   Host             $host;          # 传递域名
        proxy_set_header   X-Real-IP        $remote_addr;   # 传递ip
        proxy_set_header   X-Scheme         $scheme;        # 传递协议
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        # code-server的websocket连接需要Upgrade、Connection这2个头部
        proxy_set_header   Upgrade          $http_upgrade;
        proxy_set_header   Connection       upgrade; 
        proxy_set_header   Accept-Encoding  gzip;
    }
}

# http请求直接重定向到https
server {
    listen 80;                          # 监听端口
    server_name code.alanyf.site;       # 域名
    return 301 https://$server_name$request_uri;
}
```

这样即可用二级域名访问了：https://code.your_server_name

## 四、更多启动配置参数介绍

- 不同版本的参数可能会不一样，具体以code-server -h显示的为准:

|参数|说明|
|:---|:---|
|auth|自定义身份验证类型，如果不设置则默认只有password。[password, none]|
|cert|https证书路径。如果没有提供路径，则自动生成。|
|cert-key|非生成证书时证书密钥的路径，如果用自己的https证书认证的话此段必填。
|disable-updates|禁用更新，没什么好说的。
|disable-telemetry|禁用遥测。就是不允许向微软服务器发送错误或数据信息。
|help|帮助指令。|
|open|启动时在浏览器中打开。不能远程工作。
|bind-addr|设置ip地址访问与端口号。[host:port ]
|socket|socket路径，设置bing-addr的话此指令可以忽略。
|version|查看当前版本。
|user-data-dir|用户文件路径。
|extensions-dir|扩展文件存储路径。
|list-extensions|列出vscode安装的所有扩展插件。
|force|阻止在安装VS代码扩时显示提示 。
|install-extension|通过id或者vsix安装指定vscode扩展插件。
|uninstall-extension|通过id卸载指定vscode扩展插件。
|show-versions|显示vscode扩展插件版本。
|proxy-domain|设置代理端口的域名。
|verbose|启用详细日志记录。|


## 五、参考
浏览器上的IDE：code-server安装——服务器版的vscode