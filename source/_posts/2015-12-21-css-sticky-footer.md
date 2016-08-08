layouts: posts
title: 让footer固定在页面（或视口）底部
date: 2015-12-21 14:51:31
categories: 翻译
tags: [css,translation]

---

这是一个让网站footer固定在浏览器(页面内容小于浏览器高度时)/页面底部的技巧。由HTML和CSS实现，没有令人讨厌的hacks。所以这就能在所有主流浏览器上正常运行（甚至包括IE5和IE6）。
<!-- more -->
### 如何通过用CSS让Footer固定在页面顶部。
在样式表单里添加下面几行CSS代码。`.wrapper` 的负外边距与 `.footer` 和 `.push` 的高度相等。负外边距应该与footer的整体高度相等（包括padding、border）。

```
* {
    margin: 0;
}
html, body {
    height: 100%;
}
.wrapper {
    min-height: 100%;
    height: auto !important; /* 如果你不需要考虑IE6，则可以把这行与下一行代码删除 */
    height: 100%;
    margin: 0 auto -4em;
}
.footer, .push {
    height: 4em;
}
```
    
    

按照此 HTML 结构。没有内容会超出 .wrapper 和 .footer 的 `div` 标签，除非超出内容是通过CSS的绝对定位。另外，`.push` 的 `div` 标签也不应该含有内容，毕竟它是作为一个将footer“推”下去的隐藏元素。否则会与footer的内容重叠。

```
<html>
    <head>
        <link rel="stylesheet" href="layout.css" />
    </head>
    <body>
        <div class="wrapper">
            <p>Your website content here.</p>
            <div class="push"></div>
        </div>
        <div class="footer">
            <p>Copyright (c) 2008</p>
        </div>
    </body>
</html>
```
    


----------


#### 多列布局（通过浮动）
为 `.push` div 添加 clear 属性。

```
.footer, .push {
    clear: both;
}
```

#### height:auto!important; 和 height:100%;属性
这两个属性是为了在IE6及以下的浏览器实现 [min-height](http://caniuse.com/#search=min-height) 效果(min-height只兼容IE7及以上)。所以，当你不需要考虑IE6时，可把这两个属性删除。

> 因为IE6是考虑元素内容的尺寸，而不是元素本身尺寸。在符合标准的浏览器中，如果元素的内容太大，它只会超出框之外。但是在IE6中，如果元素内容太大，则整个元素就会扩展(包括宽和高)。即设定的width表现得像min-width。

完整代码：https://github.com/JChehe/CSS-Sticky-Footer/blob/master/CSS%20Sticky%20Footer.html
参考：http://ryanfait.com/resources/footer-stick-to-bottom-of-page/