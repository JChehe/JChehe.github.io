layout: posts
title: 如何为不定高度(height:auto)的元素添加CSS3 transition-property:height 动画
date: 2015-06-23 00:47:42
categories: 原创
tags: [css3, transiton]

---

但一个元素不设置height时，它的默认值是 auto，浏览器会计算出实际的高度。  
但如果想给一个 height:auto 的块级元素的高度添加 CSS3 动画时，该怎么办呢？  
从 MDN 的可以查到 CSS 支持动画的属性中的 height 属性如下：  
<!-- more -->

 > height ：yes, as a length, percentage or calc(); // 当 height 的值是 length，百分比或 calc() 时支持 CSS3 过渡。

所以当元素 height : auto 时，是不支持 CSS3 动画的。

除了通过 JS 获取精确的 height 值的方法外，其实我们可以使用 max-height 代替 height。

只要我们设置一个肯定比元素自增长大的高度值就可以了。当然，因为是根据 max-height 值进行过渡效果，所以最好不要大得离谱，否则动画效果不理想。

	<!DOCTYPE html>
	<html lang="en">
	    <head>
	        <meta charset="utf-8">
	        <style>
	            *{
	                margin: 0;
	                padding:0;
	            }
	            div{
	                
	                display: inline-block;
	                overflow: hidden;
	                background-color: orange;
	                max-height: 20px;
	                -webkit-transition: max-height 1s;
	                transition: max-height 1s;
	            }
	            div:hover{
	                max-height:200px;
	            }
	        </style>
	    </head>
	    <body>
	        <div>
	            <p>我不是height，是max-height</p>
	            <p>我不是height，是max-height</p>
	            <p>我不是height，是max-height</p>
	            <p>我不是height，是max-height</p>
	            <p>我不是height，是max-height</p>
	            <p>我不是height，是max-height</p>
	        </div>
	    </body>
	</html>

参考资源：http://stackoverflow.com/questions/3508605/css-transition-height-0-to-height-auto

这是我第一篇博客文章，希望能让大家学到东西。当然，我更希望收到大家对我的建议！