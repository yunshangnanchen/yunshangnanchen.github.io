在Markdown文档中插入视频
 
一、在线视频插入
 
Markdown不支持视频插入，但支持部分HTML语句，可用 <iframe> 插入在线视频，例如插入B站视频：
 
html
 
<iframe width="560" height="315" src="https://b23.tv/Y6lmyeQ" frameborder="0" allow="accelerometer; autoplay; clipboard - write; encrypted - media; gyroscope; picture - in - picture" allowfullscreen></iframe>

 <iframe width="560" height="315" src="https://b23.tv/Y6lmyeQ" frameborder="0" allow="accelerometer; autoplay; clipboard - write; encrypted - media; gyroscope; picture - in - picture" allowfullscreen></iframe>

 
二、本地视频插入
 
Markdown通常无法直接插入本地视频，不过在将Markdown转换为HTML并在本地浏览器查看时，若视频与Markdown文件同目录（假设视频为myvideo.mp4），可这样操作：
 
html
 
<video width="320" height="240" controls>
  <source src="myvideo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
 
 
三、注意事项
 
1. 不同编辑器对视频插入的支持不同，需按需调整。
2. 在线视频链接需有效且能正常访问。
3. 插入本地视频要确保文件路径正确和浏览器权限设置无误。
 
文中“放只小猫在这别摸死了”与主题无关，应删掉。
