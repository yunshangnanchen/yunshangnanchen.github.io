# Markdown插入网易云音乐播放模块

Nanchen

于 2024-06-22 22:16:07 发布
![](https://github.com/yunshangnanchen/yunshangnanchen.github.io/blob/main/assets/image/wyyyy.png?raw=true)
核心代码：

```
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="100" src="https://music.163.com/outchain/player?type=2&amp;id=38018486&amp;auto=1&amp;height=100"></iframe>
```

一、获取id


从复制的链接中得到id，将核心代码中的id替换。
二、检查元素后加入代码
![](https://gitee.com/ncjj/jpg/raw/master/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-06-22%20084310.png)
其中，
data-res-id 中的id直接替换核心代码中的id即可

- height为插入模块的高度
- auto为1时，为自动播放模式，为0时，为非自动播放模式
最终效果：
<iframe frameborder="no" border="0" marginwidth="1" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=2152356071&auto=1&height=66"></iframe>