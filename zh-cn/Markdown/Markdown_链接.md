# Markdown 链接

链接使用方法如下：

```md
[链接名称](链接地址)

或者

<链接地址>
```

例如：

```md
这是一个链接 [菜鸟教程](https://www.runoob.com)
```

显示结果如下：

![实例]()

直接使用链接地址：

```md
<https://www.runoob.com>
```

显示结果如下：

![实例]()

**高级链接**

我们可以通过变量来设置一个链接，变量赋值在文档末尾进行：

```md
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/

```

显示结果如下：

![实例](./图床/文章末尾赋值.png)
