# Ubuntu：使用命令行安装deb文件

## Ubuntu使用deb安装软件

在ubuntu中，可以直接使用dpkg命令安装deb软件包

```ubuntu
sudo dpkg -i xxx.deb
```

在安装的的过程可能会报错：所依赖的软件包未安装（大体上是这个意思，系统的报错都会说明原因的，需要自己耐心地去看，很多东西知道错误的原因都可以自己解决）

可以在系统报错之后，系统会自动记录缺失的依赖包，此时只需要执行

```ubuntu
sudo apt install -f
```

系统就会自动安装所需要的依赖包，然后重新执行

sudo dpkg -i xxx.deb

就OK啦。
