# Markdown 图片

Markdown 图片语法格式如下：

```md
![alt 属性文本](图片地址)
![alt 属性文本](图片地址 "可选标题")
```

- 开头一个感叹号 !
- 接着一个方括号，里面放上图片的替代文字
- 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。

使用实例：

```md
![RUNOOB 图标](https://static.jyshare.com/images/runoob-logo.png)
![RUNOOB 图标](https://static.jyshare.com/images/runoob-logo.png "RUNOOB")
```

显示结果如下：

![RUNOOB 图标](https://static.jyshare.com/images/runoob-logo.png)  
![RUNOOB 图标](https://static.jyshare.com/images/runoob-logo.png "RUNOOB")  

当然，你也可以像网址那样对图片网址使用变量:

```md
这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾为变量赋值（网址）

[1]: https://static.jyshare.com/images/runoob-logo.png
```

显示结果如下：

[RUNOOB][1]

[1]: https://static.jyshare.com/images/runoob-logo.png

Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的\<img>标签。

```md
<img src="https://static.jyshare.com/images/runoob-logo.png" width="50%">
```

**图片的高级使用技巧**

图片尺寸调整:

Markdown本身不支持直接调整图片尺寸。但你可以通过使用HTML标签来实现。

```md
<img src="<https://example.com/logo.png>" width="200" height="100">
```

这允许你自定义图片的宽度和高度。

### 图片对齐

与尺寸调整类似，Markdown不直接支持图片对齐，但可以通过HTML实现。

```md
<img src="<https://example.com/logo.png>" align="right">
```

这样图片将对齐到文本的右侧。

### 链接图片

你可以将图片变为链接，点击图片时打开指定URL。

例子:

```md
![Markdown](https://example.com/logo.png)](https://www.javatiku.cn)
```

### 使用相对路径

对于本地仓库中的图片，你可以使用相对路径而不是完整的URL。

```md
![Local Image](./images/picture.jpg)
```

**图片格式和优化**

### 支持的图片格式

Markdown支持多种图片格式，包括但不限于JPEG、PNG、GIF和SVG。

选择合适的格式取决于图片的内容和用途。

### 图片优化

优化图片以减小文件大小，加快页面加载速度。

使用压缩工具如TinyPNG或ImageOptim。

### 使用图床服务

对于不在本地仓库的图片，你可以使用图床服务如Imgur或Flickr。
