更新

取消所有 MD033 的报错

```md
  "markdownlint.config": {
    "default": true,
    "MD033": false // 加这一句
  },
```

### 1. 问题

在 vscode 中使用 markdownlint 插件进行代码分析，当使用了 html 标签时，插件会给出 `MD033/no-inline-html` 警告（没错，就是那种强迫症最讨厌的黄色波浪线）。

1. 原因
插件作者的意图是为了使 markdown 文件是纯 markdown 的，避免在使用 html 以外的方式渲染时出错。如图所示：
插件文档截图

原文链接如下：
markdownlint Rules on github

3. 解决方法
那么取消这种警告的方法，是在设置的 json 文件中添加如下代码

"markdownlint.config": {
    "default": true,
    "MD033": {
      "allowed_elements": [ "font", "li", "table", "tr", "td" ]
    }
  },
1
2
3
4
5
6
其中 "allowed_elements" 的列表中填入不想提出警告的 html 标签（一个一个加挺烦的。。。）
保存修改后，markdownlint将不再对 "allowed_elements" 中的 html 标签提出警告