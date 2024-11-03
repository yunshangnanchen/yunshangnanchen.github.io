# Arch Linux 完全安装教程 2024.5
2022年12月26日 10:144.1万浏览 · 627点赞 · 218评论

许琉璃XLL
粉丝：395文章：1
关注
本文根据官方 Wiki 的内容结合个人经验写成，由广大网友监督并改进，持续更新中。

本文离线PDF：https://www.123pan.com/s/qzORVv-uMK3v.html

含少量讲解的演示视频：

08:47
Arch Linux 完全安装教程 2023.9
 1.1万  59
视频
许琉璃XLL
新年快乐，感谢各位大佬的支持与指导。

授人以鱼不如授人以渔，本文会将大多数命令的作用和原理详细描述，并适量加入拓展资料加深理解。使用虚拟机演练一遍为妙，最后祝你一路顺风。

---

## 进入 Live 环境

- Arch Linux 官方每月初发布一次由 archiso 生成的镜像文件，其中包含了安装所需的工具。

在镜像站获取最新的 Arch Linux 镜像文件：

```
（最新）https://mirrors.ustc.edu.cn/archlinux/iso/latest/archlinux-x86_64.iso
```

之后将镜像文件使用 Etcher、软碟通或Rufus 等工具刷写到 U 盘或其他设备之中。

重启进入 BIOS，关闭 vt-d 和安全启动，并选择刷写后的设备作为第一启动项，再次重启电脑进入 Live 环境。
![Live 环境](https://i0.hdslb.com/bfs/article/f749bfb92ce297fd090754850e0e7112098bfc44.png@1256w_798h_!web-article-pic.avif)
- 使用 Ventoy 可以免去全盘刻录的步骤，减少闪存损耗，如果有多块硬盘（或者不同分区）甚至不需要将镜像文件复制到 U 盘即可直接自 iso 文件启动，详见 Ventoy文档。
  若在引导界面后黑屏，请检查显示器相关连接线缆，再上网查询自己的显卡是否能被原生驱动，再检查 BIOS 相关设置。

进入 Live 环境后关闭 reflector：

```
# systemctl stop reflector
```

- reflector 会根据速度自动修改镜像源，但是由于只考虑最新的20个镜像站，其结果大多数时候都不怎么好用。

---

## 联网

Arch Linux 的安装需要良好的网络连接，有线网络由`systemd-networkd`自动配置，无线网络请使用`wpa_supplicant`连接：

首先使用以下命令寻找无线网卡：

```
# ip link
```

- 一般无线网卡的名称都包含 wlan 字段。

再用以下命令连接 wifi：

```
# wpa_supplicant -D wext -B -i <设备名> -c <(wpa_passphrase <wifi 名称> <wifi 密码>)
```

- 根据实际情况替换括号内的内容，例如：# wpa_supplicant -D wext -B -i wlan0 -c <(wpa_passphrase TP-LINK_home Kc0ver)
  -D wext 指定驱动，-B 后台运行，-i 指定设备，-c 指定配置文件，wpa_passphrase 根据 SSID 和密码生成配置文件。
  还可以使用 iwctl 联网，其操作十分简单直观，不做讲解。

---

## 校对时间

### timedatectl 修改时区：

```
# timedatectl set-timezone Asia/Shanghai
```

### date 验证时间：

```
# date
```

### 输出样例：

```
Sun Dec 25 20:45:32 CST 2022
```

本机时间匹配北京时间即可进行下一步。

---

## 分区

数据无价，近视的戴好眼镜，多看几遍，别格错了盘！

数据无价，近视的戴好眼镜，多看几遍，别格错了盘！

数据无价，近视的戴好眼镜，多看几遍，别格错了盘！

`fdisk` 列出硬盘和分区情况：

```
# fdisk -l
```

之后使用以下命令进入图形化的分区修改界面：

```
# cfdisk <硬盘编号>
```

- 编号可能不同，举个例子：cfdisk /dev/sda，如果是空盘可能会要求选择分区表格式，UEFI 选择 gpt，传统引导选择 dos（mbr）。

![Dump 是转储不是脚本](https://i0.hdslb.com/bfs/article/49681f869a4357c27221f28aba9e84b83f51bc5c.png@1256w_658h_!web-article-pic.avif)
如上图所示进行分区操作，基本为以下步骤：

![如果是传统引导，别忘了标记为可引导](https://i0.hdslb.com/bfs/article/1c906510ffefca62f98f1cb039d2c86ea87cd916.png@1256w_658h_!web-article-pic.avif)

![作者的配置，2G交换分区剩下的是主分区](https://i0.hdslb.com/bfs/article/5edaa7e6a7e6e2ad68deea8f263df032c1070bca.png@1256w_746h_!web-article-pic.avif)
UEFI 引导需要额外的分区，如下：

![注意看type的配置](https://i0.hdslb.com/bfs/article/c0d1e41856066513dfa475d49e6576cc554efdfc.png@1256w_746h_!web-article-pic.avif)

设置好分区后记住编号，再格式化：

```
系统分区：

# mkfs.ext4 <分区编号>

EFI 分区（如果有）：

# mkfs.fat -F 32 <分区编号>

交换分区（如果有）：

# mkswap <分区编号>

启动交换分区（如果有）：

# swapon <分区编号>

挂载即将安装系统的分区：

# mount <分区编号> /mnt
```

- 视频演示：https://www.bilibili.com/video/BV1gG411o7g3/
  先挂载将要安装系统的分区到 /mnt，稍后挂载 EFI 分区。
  图中演示的是传统引导的分区情况。
  看好分区编号，不要在分区中“分区”。
  NVMe 接口的硬盘，其硬盘号略显复杂，简单的解释如下：

![](https://i0.hdslb.com/bfs/article/e643317e4628d605596bb7a4e96640aca3bee699.png@!web-article-pic.avif)

---

## 安装系统
接下来的教程以这样的分区模式进行演示：

![小白经典安装：mbr 单分区](https://i0.hdslb.com/bfs/article/7ecdc75d27e103ddb974d36ce32ba497562c6d6d.png@1256w_746h_!web-article-pic.avif)

Arch Linux 的优势在于可以自由选择系统的每个部分，安装之前要先更换软件镜像源，使用以下命令编辑源列表：

```
# nano /etc/pacman.d/mirrorlist
```


在第一行加入：

```
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
```

这是清华大学的软件源。

- 中国科学技术大学的源：
  Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch

![如图在第一行](https://i0.hdslb.com/bfs/article/3f1dcfabeb1169caf060a2a232b5e3bbe4be37b3.png@1256w_746h_!web-article-pic.avif)

接下来使用 ctrl + o 回车保存，ctrl + x 退出编辑器，并刷新软件包列表：

```
# pacman -Syy
```

重新安装 archlinux-keyring 包：

```
# pacman -S archlinux-keyring
```

使用以下指令安装基本系统：

```
# pacstrap /mnt base base-devel linux linux-firmware linux-headers
```

`base` 和 `base-devel` 包组内含一套基本的系统软件，必须安装，`linux` 是内核，`linux-firmware` 是一些驱动，`linux-headers` 是内核头文件。

- Arch Linux 本质上是许许多多软件包的组合。举个不太恰当的例子，它好似一幢高楼，有地基（Linux 内核）、钢筋框架（base 包组）和框架中的墙体（桌面环境，浏览器以及其他一切）。最终建造起的大楼完全取决于你的意愿。
  pacstrap 以及下文提到的 genfstab、arch-chroot 等命令都来自 arch-install-scripts 包，其并不包含在 base 或 base-devel 中。
  除了 Arch Linux，某些发行版也有 arch-install-scripts 包。

关于内核的选择，Arch Linux提供了以下内核：

- `linux` - 原版的 Linux 内核和模块，采用了一些补丁。
- `linux-hardened` - 注重安全的 Linux 内核，采用一系列加固补丁以缓解内核和用户空间漏洞。和 linux包 相比，它启用了上游更多的内核加固功能。
- `linux-zen` - 一些内核黑客合作的结果，提供了最适合日常使用的内核。可在 https://liquorix.net 上找到一些细节（他们为 Debian 提供基于 Zen 的内核二进制文件）。
- `linux-lts` - 受长期支持（LTS）的 Linux 内核和模块。
- `linux-rt` 和 `linux-rt-lts` - 由Ingo Molnar领导的一小群核心开发人员维护。这个补丁允许几乎所有的内核被抢占，除了少数非常小的代码区域（“原始自旋锁关键区域”）。这是通过将大多数内核自旋锁替换为支持优先级继承的互斥锁，以及将所有中断和软件中断移动到内核线程来实现的。

是不是眼花缭乱了？我建议安装 `linux-zen` 内核，那么命令就变成了下面的样子：

```
# pacstrap /mnt base base-devel linux-zen linux-firmware linux-zen-headers
```

- /mnt 是系统盘挂载点。
  虚拟机下 linux-zen 内核可能会出现问题。@红客路上

这样只是最基本的系统，还需要更多的软件来支持系统运行，以下是作者认为**需要安装**的：

- `networkmanager` - 连接互联网
- `openssh` - ssh服务
- `cups` - 打印机
- `nano` 和 `micro` - 都是好用的命令行文本编辑器，micro 的快捷键更接近 Windows 自带的记事本。
- `git` - 100%会用到的，现在不装以后也会被当作依赖安装
- grub - 必须安装，引导系统用
- os-prober - 双系统必须安装
- efibootmgr - UEFI 必须安装
- intel-ucode 或 amd-ucode - CPU 微码必须安装
- man-db 和 man-pages - 查看软件包的文档
- firefox  - 浏览器
- noto-fonts-cjk 和 noto-fonts-emoji - 谷歌设计的字体（包含中文和 emoji）

    - 删除 NTFS-3g @迪迪尼卡吧
        删除 dhcpcd 相关软件包及操作 @Senaruk

---

## 设置系统

挂载 EFI 分区（如果有）：

```
# mkdir /mnt/boot/efi

# mount <EFI 分区编号> /mnt/boot/efi
```

创建 fstab 文件：

```
# genfstab -U /mnt >> /mnt/etc/fstab
```

- 系统启动时会根据生成的 fstab 文件自动挂载分区。

**chroot** 进入新系统：

```
# arch-chroot /mnt
```

- chroot 可以理解为不重启进入位于挂载点 /mnt 的新系统中，可以在安装设置与急救系统方面发挥作用。

  如果使用 pacstrap 安装基本系统的步骤没有做好，chroot 时就会出现报错，包括找不到各种基本命令（如 ls、cat 或 bash），需要重新操作硬盘再安装一次。

---

### 设置时区：

```
# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

生成 **/etc/adjtime：**

```
# hwclock --systohc
```

**编辑 locale.gen 和 locale.conf：**

```
# nano /etc/locale.gen
```

locale.gen 和 locale.conf 有关系统的语言，是本地化的步骤。

![](https://i0.hdslb.com/bfs/article/fbd5faf67c4494ba15e659485e85a41473bdb070.png@1256w_746h_!web-article-pic.avif)
前面教过如何保存与退出，不再赘述。

运行 **locale-gen：**

```
# locale-gen
```

- 只有运行该命令后，locale.gen 中取消注释的地区和语言选项才可以使用。

编辑 /etc/locale.conf：

![](https://i0.hdslb.com/bfs/article/0846771c283017bcad86de0741d53cabd4fcd4c6.png@1256w_746h_!web-article-pic.avif)

- LANG 变量如果设置为中文会导致控制台乱码，安装中文字体后图形界面不乱码。

**编辑主机名：**

```
# nano /etc/hostname
```

- DESKTOP-N81325

![](https://i0.hdslb.com/bfs/article/55bac57784dffc8d2647c6438fb4a53491d40c8a.png@1256w_746h_!web-article-pic.avif)

设置 root 密码：

```
# passwd root
```

- 注意小键盘锁的开闭。

没有输入提示：

![](https://i0.hdslb.com/bfs/article/4cc1b39798c52a417aea26441ab95b13ead1262a.png@1256w_746h_!web-article-pic.avif)

安装 **grub**引导系统：

- 如果是双系统，需要启用 os-prober 发现其他操作系统（比如 Windows）。

编辑 grub 配置文件：

```
# nano /etc/default/grub
```
![](https://i0.hdslb.com/bfs/article/61fec0e6bce29f737f1ea1520d613012d3006e11.png@1256w_746h_!web-article-pic.avif)

接下来便可以安装 grub 到硬盘，

```
传统引导：

# grub-install --target=i386-pc <硬盘号>

# grub-mkconfig -o /boot/grub/grub.cfg
```

- 注意硬盘号不要写成分区号。样例：正确的：/dev/sda，错误的：/dev/sda1 @NightArc__

```
UEFI 引导：

# grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB

# grub-mkconfig -o /boot/grub/grub.cfg
```

引导安装完毕。

- UEFI 还可以使用 systemd-boot 引导，本教程不做讲解。

服务自启动：

```
打印机（如果需要）：

# systemctl enable cups

ssh 服务：

# systemctl enable sshd

网络服务：

# systemctl enable NetworkManager
```

- systemctl 用于启动服务等操作，将 “enable” 换为 “start” 或 “stop” 可以立即操作服务的开与关。

  默认情况下不允许以 root 用户登录 ssh。

创建普通用户：

```
# useradd -m -G wheel <用户名>
```

编辑 sudoers 文件赋予用户管理员权限：

```
# nano /etc/sudoers
```
![](https://i0.hdslb.com/bfs/article/9441217658e58b7149fd298f02b61b39d525ea5c.png@1256w_746h_!web-article-pic.avif)

- 如果想无密码使用 sudo 就把下面的 NOPASSWD: ALL 一行也取消注释。

设置用户密码：

```
# passwd <用户名>
```

安装 Gnome 桌面：

```
# pacman -S gnome gnome-tweaks gnome-extra gdm
```

- 不用 Gnome 请跳过该部分，桌面环境可选 KDE 详见下文。
  gnome-extra 包组包含一大堆实用工具，但是也有一些用处不大的包，比如地图，联系人，以及一些游戏，可以在安装后手动删除他们。@呔平

开机启动 gdm 界面：

```
# systemctl enable gdm
```

- gdm 是一个 Display Manager（可以理解为锁屏）。

安装完毕，退出 chroot 环境：

```
# exit
```

---

现在你又回到了 Live 环境，重启系统：

```
# reboot
```

- 正常重启系统会自动卸载分区，强行断电可能会造成数据丢失。

这时把第一启动项的位置还给系统盘，首先应该看见的是 grub 的启动项选择界面。

![grub](https://i0.hdslb.com/bfs/article/59b6a6aaba7df1ad53f98c5dd62ae9321e89ae48.png@1256w_942h_!web-article-pic.avif
)
- 如果选择下面的高级选项，grub 会展示出 fallback 启动镜像，如果更换了硬件无法启动可以尝试 fallback，进入系统后再对系统进行修复。

选择第一个条目进入 Arch Linux 后，如果安装了 gdm 应该可以看见图形化的登陆界面。

![gdm 的界面](https://i0.hdslb.com/bfs/article/f4aa358488731581e4508dd032079f57f4be2c34.png@1256w_942h_!web-article-pic.avif)

gdm 启动的时候可能要多等一会。

---

## Gnome 本地化

- 不用 Gnome 请跳过本章节。

![图形化设置](https://i0.hdslb.com/bfs/article/e2c55debcf18693bb4e4081db82504944a8e9334.png@1256w_942h_!web-article-pic.avif)

图形化设置，设置完成后登出再登入。

![如图](https://i0.hdslb.com/bfs/article/a2e9ae2631f105e68e17623e65336dc618d42d8c.png@1256w_942h_!web-article-pic.avif)

![中文](https://i0.hdslb.com/bfs/article/15dccb23bb50298f51229646886e9a1315674035.png@1256w_942h_!web-article-pic.avif)

---

## 更多软件仓库

Arch Linux 会继承 Live 环境中配置的 /etc/pacman.d/mirrorlist 源列表，因此官方源不需要再配置，我们现在来添加更多的软件源。

Arch Linux 中文社区仓库：

- Arch Linux 中文社区仓库是由 Arch Linux 中文社区驱动的非官方软件仓库，包含许多官方仓库未提供的额外的软件包，以及已有软件的 git 版本等变种。

修改  **/etc/pacman.conf：**

```
$ sudo nano /etc/pacman.conf
```

- 这里开始默认使用普通用户（$）。

在文件的最下面加入以下内容：

```
[archlinuxcn]

Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

- 中国科学技术大学的源：

  [archlinuxcn]

  Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch

之后安装 archlinuxcn-keyring 导入密钥。

- 有部分人反映按照上述步骤配置后不能正常安装 Arch Linux CN 源内的软件包，必须要加上一行 SigLevel = Optional TrustAll 才能正常使用。如果你也在配置完成后无法使用，不妨将 pacman.conf 中添加的内容改为如下：
  [archlinuxcn]
  SigLevel = Optional TrustAll
  Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
  之后尝试重新安装 archlinux-keyring 和 archlinuxcn-keyring 两个软件包，安装完毕后删除 SigLevel = Optional TrustAll 再尝试安装 CN 源内其他软件包。

32 位仓库：

修改  **/etc/pacman.conf**，删除 # ，修改过后的效果如下图：

![如图](https://i0.hdslb.com/bfs/article/ab0cc233a6f384fc6ef825add852a12b4c57a35f.png@1256w_942h_!web-article-pic.avif
)

- multilib 是 32 位软件源，里面有 wine 所需的包。

---

## AUR 助手
- Arch 用户软件仓库（Arch User Repository，AUR）是为用户而建、由用户主导的 Arch 软件仓库。AUR 中的软件包以软件包生成脚本（PKGBUILD）的形式提供，用户自己通过 makepkg 生成包，再由 pacman 安装。创建 AUR 的初衷是方便用户维护和分享新软件包，并由官方定期从中挑选软件包进入 community 仓库。

![AUR 助手](https://i0.hdslb.com/bfs/article/b1fdbf420f719775aa2a05cee6316292afa95a66.png@1256w_536h_!web-article-pic.avif)

安装 paru：

```
$ sudo pacman -S paru
```

- paru 的用法与 pacman 大体相同。

之后为了在搜索时优先显示软件源内的结果，编辑 paru 配置文件 /etc/paru.conf：

- 取消这一项前面的注释
- 
![取消这一项前面的注释](https://i0.hdslb.com/bfs/article/15729022b34b2a10554803be46e85e76358600284.png@!web-article-pic.avif)

例子：安装**Microsoft Edge：**

```
$ paru -S microsoft-edge-stable-bin
```

![搜索软件包](https://i0.hdslb.com/bfs/article/33d002f47de9a8e23af0de4ee6520e336f77dc8b.png@1256w_942h_!web-article-pic.avif)

显卡驱动
下图是官方维基关于 Xorg 显卡驱动的表格：

![官方维基的表格](https://i0.hdslb.com/bfs/article/7cd4a2c3400df0c34da4794f59ac4eacfe529714.png@1256w_316h_!web-article-pic.avif)

大多数驱动是开源的，英伟达的显卡还在 AUR 中提供了闭源驱动，建议安装开源驱动，未来有需求再安装闭源驱动。

假设我的显卡品牌是 ATI，我应该这样安装：

```
$ sudo pacman -S xf86-video-ati mesa lib32-mesa
```

- 右上角有 “包” 角标的为软件包，可以通过 yay 或 pacman 安装，右上角带有 “AUR” 角标的是 AUR 包，只能使用 AUR 助手安装。
  lib32-mesa 只有在开启了 32 位源之后才可安装。
  任何 Intel 显卡包括核显都不建议安装 xf86-video-intel，有可能出现图形界面的故障。@LCア @Senaruk

AUR 安装闭源驱动示例：

```
$ paru -S nvidia
```

-  闭源驱动的配置又繁琐又充满了未知因素，配置一定要参阅官方文档，建议新手在安装前做好系统的备份，还要做好图形界面崩溃的心理准备。

---

## 其他驱动

### 触摸板：

```
$ sudo pacman -S xf86-input-libinput libinput
```

- Linux 下触控板的体验不太好。

### 蓝牙：

```
$ sudo pacman -S bluez bluez-utils

$ sudo systemctl enable bluetooth

$ sudo systemctl start bluetooth
```

- 一部分蓝牙模块比如作者的 CSR8510 默认情况下是用不了的，这是因为没有安装合适的驱动，建议到 aur 软件库中搜索有无驱动，无线网卡等硬件同理，只要在 aur 软件库搜索你的硬件型号就可以了。

![Gnome 的图形化设置，作者的蓝牙无法驱动就不演示了](https://i0.hdslb.com/bfs/article/0fae33d1f6c80da2c632a712d4c644bb55bef2d6.png@1256w_942h_!web-article-pic.avif)

---

## 中国大陆本地化

中文字体：

- wqy-microhei
- wqy-microhei-lite
- wqy-bitmapfont
- wqy-zenhei
- ttf-arphic-ukai
- ttf-arphic-uming
- adobe-source-han-sans-cn-fonts
- adobe-source-han-serif-cn-fonts

noto-fonts-cjk

手动安装 ibus 输入法：

```
$ sudo pacman -S ibus ibus-libpinyin
```

- ibus-libpinyin 是中文输入法引擎。

```
$ ibus-setup
```

- 只需要执行一次，后续需要 ibus 开自启动在 gnome-tweaks （优化）中添加启动项。

接下来要修改 .bashrc 文件：

```
$ nano ~/.bashrc
```

- 或者 .zshrc

在最下面添加如下内容：

```
export GTK_IM_MODULE=ibus

export XMODIFIERS=@im=ibus

export QT_IM_MODULE=ibus
```

- 上面的内容在运行 ibus-setup 后输出，修改完毕之后重新登陆或重启系统。如果桌面环境使用 gnome，还需要在设置 → 输入源中进行相关设置，详见下文图片

使用 tmoe 安装 ibus：

```
安装 tmoe：

$ sudo pacman -S wget

$ wget l.tmoe.me/2.awk

启动 tmoe：

$ gawk -f 2.awk
```

选择中文：
![](https://i0.hdslb.com/bfs/article/6bd146f9383a6c11de4b4b2be086e4ab6fec1a1c.png@1256w_942h_!web-article-pic.avif)

选择 tools：
![](https://i0.hdslb.com/bfs/article/461f8d4d7f23d187bace91e4ea47257e07adefe9.png@1256w_942h_!web-article-pic.avif)

选择 tools


自动安装依赖：

![](https://i0.hdslb.com/bfs/article/3fb0de8cbed5c221bb75d89e2b1a963bf6e8124b.png@1256w_942h_!web-article-pic.avif)

打开 “秘密花园”：
![](https://i0.hdslb.com/bfs/article/6da50642fa31bfc8aa9155e14d22a9cd61c039b8.png@1256w_942h_!web-article-pic.avif)

打开 “input method：输入法”：

![](https://i0.hdslb.com/bfs/article/9b16914bc0e0f3b63ef56578dc3fabc11a78f0ab.png@1256w_942h_!web-article-pic.avif)

三个都可以选择，如果安装了 gnome，建议选择 ibus：

![](https://i0.hdslb.com/bfs/article/b1e19f075b8095cfb8eb9b80e9d84ac1349bac57.png@1256w_942h_!web-article-pic.avif)

选择 “libpinyin”：
![](https://i0.hdslb.com/bfs/article/f1613167b4c4e241b0635762a803f3079c878293.png@1256w_942h_!web-article-pic.avif)

安装完毕：

![](https://i0.hdslb.com/bfs/article/8c97d94804f2d9cc3ee4a4a07e43bfed9610602c.png@1256w_942h_!web-article-pic.avif)

- ibus 的候选字排列默认是竖直的，如果需要调成横向排列应该安装 gnome 拓展：Ibus-Tweaker 来设置，详细设置方式见下文 “Gnome 优化” 章节。
 
按下 ctrl + c 退出，重启系统。
在系统设置添加输入法：
- 不用 Gnome 请跳该部分。

![](https://i0.hdslb.com/bfs/article/d3ee22226ba01eba2bf17d895dbdef2e9e28fd20.png@1256w_942h_!web-article-pic.avif)

![](https://i0.hdslb.com/bfs/article/bc7e3f67444fb4b9f6624bdd1dd90a7731892f16.png@1256w_942h_!web-article-pic.avif)

![](https://i0.hdslb.com/bfs/article/bb43b7cbaac40de53a0fb7e73788926c5cf94ca8.png@!web-article-pic.avif)

使用 win + 空格 切换输入法。

微信，QQ 等国产软件的安装和更多中国化设置见：

```
https://wiki.archlinuxcn.org/wiki/建议阅读#中国大陆用户的推荐解决方案
```
---

##  Gnome 优化

- 不用 Gnome 请跳过本章节。

Gnome 默认不带系统托盘与桌面图标还有 dock 栏，我们要安装拓展以支持这些功能：

先安装支持库：

```
$ sudo pacman -S gnome-browser-connector
```

用 firefox 打开 gnome 拓展网站并如图操作：
![](https://i0.hdslb.com/bfs/article/6149d3165f030af106ef4897bb4cbb2860fc1d80.png@1256w_942h_!web-article-pic.avif)

- 安装以下拓展：
  - ![](https://i0.hdslb.com/bfs/article/8ff4337f61448a4a596a92f8d87b69519a27736f.png@1256w_942h_!web-article-pic.avif)
  - 自定义主题
  - ![](https://i0.hdslb.com/bfs/article/bd11a7fd8a306d6aca983182f268a6bb86cac9d7.png@1256w_942h_!web-article-pic.avif)
  -  桌面图标
  - ![](https://i0.hdslb.com/bfs/article/580b4111dbd814348541a35ce549d44f2c1dc520.png@1256w_942h_!web-article-pic.avif)
  - 系统托盘

- TopiconsFix 插件适配新版本的 Gnome 比较慢。

![dock 栏](https://i0.hdslb.com/bfs/article/86a0747260c794feb106a3d7ff3872631957da8a.png@1256w_942h_!web-article-pic.avif)

![华丽的 alt + tab](https://i0.hdslb.com/bfs/article/fd2ac5befed0977e685c234e2259b5a978ecf705.png@1256w_942h_!web-article-pic.avif)

![ibus 设置](https://i0.hdslb.com/bfs/article/a82ab6f71f3c68af258ec74751fe6db7fc7d0994.png@1256w_576h_!web-article-pic.avif)

![拓展管理与设置](https://i0.hdslb.com/bfs/article/379ad37f8be39961d00915444abf94456f7b283c.png@1256w_708h_!web-article-pic.avif)

上文提到的 ibus 设置：

![](https://i0.hdslb.com/bfs/article/380d13a3579f9c4bef5ed90062e350200616c726.png@1256w_1152h_!web-article-pic.avif)

用以上方式打开 ibus 的设置界面，将第二项修改为“水平”

![](https://i0.hdslb.com/bfs/article/59f3d4885936c1144fae28e8a9b9f66097a99a02.png@1256w_708h_!web-article-pic.avif)

优化
![](https://i0.hdslb.com/bfs/article/932639e30d09ecb896ac0edf4ed77e6f09ee01e5.png@1256w_708h_!web-article-pic.avif)
最终的样子

至此你的 gnome 差不多可以使用了。

---

## 附加：安装基本 KDE Plasma 桌面环境 

使用以下命令安装 plasma 和 sddm：

```
$ sudo pacman -S plasma sddm
```

- plasma 包提供桌面环境，sddm 功能类似 gdm。

**sddm 开机自启：**

```
$ sudo systemctl enable sddm
```

- 如果是从 gnome 切换到 kde plasma，你可能会卸载 gdm 转而使用 sddm，一定要在卸载之前先关闭 gdm 的开机自启，也就是：

  $ sudo systemctl disable gdm

kde 社区提供的应用程序：

```
$ sudo pacman -S kde-applications
```

- 这个包组包含所有的 kde 应用程序，安装与否不影响桌面的正常使用，如果不安装 kde-applications 也要安装 kde-utilities 包组（组内的软件包都包含在 kde-applications 中）。

![](https://i0.hdslb.com/bfs/article/f770f90f0123c1acc5d3d911f7f7006d878fbf8c.png@1256w_708h_!web-article-pic.avif)

经过简单美化的 Plasma

---

## 附加：更新系统（软件包）
Arch Linux 采取滚动式更新，这意味着它不会像 Windows 一样发布大版本，使用以下命令查找软件包更新：

```
$ sudo pacman -Syyu
```

- 前文提到 -Syy 为强制刷新软件源缓存，小写的 u 为更新系统，pacman 的参数区分大小写，例如 -r 和 -R 意味着不同的操作，更新完成后重启。

  以滚动方式更新系统有一定风险，尤其是更新内核和更新大量软件包的时候。更新前先看一看即将更新的都有哪些包，做好心理准备，即使遇到故障也不要慌，仔细检查报错以及输出，上网查询相应解决方式，进入 Live 系统修复。

  AUR 助手 paru 也可以更新系统，只要在终端中输入“paru”，其就会自动更新软件源与 AUR 的软件包。

![](https://i0.hdslb.com/bfs/article/e41a8c5894d7253db3d053faf5b6b0ae358600284.png@!web-article-pic.avif)

---

## 附加：微信

安装 deepin-wine 微信：

```
$ paru -S deepin-wine-wechat
```
![](https://i0.hdslb.com/bfs/article/18153b46fa8dde6465b672a3ef75ba66b58f80e5.png@1256w_774h_!web-article-pic.avif)

如图

---

## 附加：中文 tty
- tty 也就是安装过程中我们进行各种操作的控制台，它本身不支持中文，我们通过安装经修改的内核（cjktty 模块）可以实现显示中文的功能，如下图所示：

![如图](https://i0.hdslb.com/bfs/article/1a720f8692c876278076899a8ec127b0d7e4fd84.png@!web-article-pic.avif)
安装 lily 内核：

```
$ sudo pacman -S linux-lily
```

- 这个包在 archlinuxcn 仓库提供，安装前先配置 archlinuxcn 源。
  lily 内核在我的电脑上会导致系统卡死，慎用。

重新生成 grub 配置文件：

```
$ sudo mv /boot/grub/grub.cfg /boot/grub/grub.cfg.old

$ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

之后重启到 grub 引导界面，如图选择：

![](https://i0.hdslb.com/bfs/article/be32aa3ebe64be35f1f96746a18afe8fc05c881b.png@1256w_758h_!web-article-pic.avif)

第二项

![](https://i0.hdslb.com/bfs/article/d5562f4d3610d4431cbc5ddc1e8005717dabce1f.png@1256w_656h_!web-article-pic.avif)

第三项

启动后 tty 即可显示中文。

---

## 附加：安装 Pantheon 桌面环境

- 本节内容可能会因为软件包结构的改变而失效。

![](https://i0.hdslb.com/bfs/article/6b1cd185d7b382aa6e5c69a33042599918c0eca5.png@1256w_708h_!web-article-pic.avif)

与 macOS 相似的简约风桌面环境

- Pantheon 是 elementary OS 的桌面环境。它由 Vala 语言编写, 使用 GTK 3 和 Granite。

软件源内的包：

```
$ paru -S pantheon pantheon-print pantheon-unstable switchboard-plug-locale
AUR 内的包：
```

```
$ paru -S switchboard-plug-pantheon-tweaks-git pantheon-dock-git
```

- 以上命令包含了所有桌面组件和设置项目，tweaks 也一并安装。pantheon-dock-git 可以使用软件源内的 plank 包代替，后者有悬浮放大功能，如下图所示。

![](https://i0.hdslb.com/bfs/article/018eb61e3658bcf386badc41b21008511e5e5d1b.png@!web-article-pic.avif)

主题跟随Gtk+，plank 的指针悬浮放大功能

![](https://i0.hdslb.com/bfs/article/1e1495b7b564842276352fc94e581c7b8e24bf43.png@1256w_968h_!web-article-pic.avif)

如果用 plank 需要手动设置其自动启动

![](https://i0.hdslb.com/bfs/article/749c0c507f613aa85d7e1318f5106b81e6a9b68d.png@1256w_240h_!web-article-pic.avif)

两个ock 有冲突

![](https://i0.hdslb.com/bfs/article/ec4194276d903159e753a51f1053e1858c72f607.png@1256w_968h_!web-article-pic.avif)

类似于 macOS 的设置界面

针对 pantheon 安装 Lightdm：

```
$ paru -S lightdm lightdm-pantheon-greeter
```

编辑 lightdm.conf：

```
$ sudo micro /etc/lightdm/lightdm.conf
```

![](https://i0.hdslb.com/bfs/article/76acb1b8c4a64f72ea84e77c634e91d7c8669c85.png@1256w_1012h_!web-article-pic.avif)

如图
找到图中高亮行，将其修改为上图的内容。Ctrl + s 保存，Ctrl + q 退出。

lightdm 开机启动：

```
$ sudo systemctl enable lightdm
```

如果设置正确就可以成功启动 lightdm。

- Pantheon 对 ibus 的兼容性最好，自带的输入法设置也是针对 ibus 的。

---

## 一些问题
- **EFI 模式分区**：我一直感觉本文对 UEFI 引导的分区方式的讲解模糊不清，因此贴上官方的教程作为参考资料：
  https://wiki.archlinuxcn.org/wiki/安装指南#建立硬盘分区
  这里有 UEFI 模式分区的视频演示：
  https://www.bilibili.com/video/BV1ve4y1N7Vs/

- **网络无法连接**：文中的两个办法如果都不起作用，可能是因为你的网卡没有被驱动，网卡千千万，不可能每一个都顾及，有问题请到 GitHub 搜索你的网卡型号，一般都会有的。

- **改了 pacman 源还是下载很慢**：请再次查看是否更改为 tuna 源，Live 系统的 reflector 在检测到网络后会自动修改源文件，这时就需要再次修改。

- **显卡驱动问题**：作者手里就一张 ati 显卡，敬请阅读：
  https://wiki.archlinuxcn.org/wiki/Xorg#驱动安装

- **我要安装其他的桌面环境**：桌面环境有很多，敬请阅读：
  https://wiki.archlinuxcn.org/wiki/桌面环境

- **AUR 很慢很慢**：可能是因为 git 仓库克隆速度慢，请自行寻找加速 github 与其他途径下载速度的办法。还有就是 build 过程很慢，这取决于硬件。
- **关于 wine**：wine 是兼容层不是虚拟机，从头开始配置 wine 非常繁琐困难，而且会有很多的小问题（比如文字发虚、乱码，窗口闪烁、错位，输入框无法使用），使用 deepin-wine 就好。

