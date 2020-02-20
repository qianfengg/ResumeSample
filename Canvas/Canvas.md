# Canvas基础特效 知识分享

> Canvas是什么？ 

1. 中文直译就是画布，简单的说就是画图
2. Canvas元素是HTML5的一部分，允许脚本语言动态渲染位图像。Canvas由一个可绘制地区HTML代码中的属性定义决定高度和宽度。JavaScript代码可以访问该地区，通过一套完整的绘图功能类似于其他通用二维的API，从而生成动态的图形。

> Canvas能做什么？

1. 特效  [17素材](http://www.17sucai.com/category/31)
2. H5游戏 [H5游戏介绍](https://baike.baidu.com/item/H5%E6%B8%B8%E6%88%8F/16954611?fr=aladdin)
3. 图表制作 大家所知道的 `ECharts`使用了canvas的技术 
4. 等等 [补充](https://www.csdn.net/article/2013-05-24/2815426-8-points-of-html5-canvas)
5. 可以看个小视频，眼见为实 [神马？大白竟然是用记事本做出来的？](https://www.bilibili.com/video/av2435883?from=search&seid=4658507290031270160)

> Canvas基础知识

1. canvas标签

   ```html
   <canvas width="300" height="150" id="myCanvas"></canvas>
   ```

   canvas标签默认大小为300,150, 请使用标签自带的属性设置宽高,不能通过css属性设置

2. canvas API  [文档](https://www.canvasapi.cn/)

   ```javascript
   let oCvs = document.getElementById("myCanvas"),
   	ctx = oCvs.getContext("2d");
   ```

   开始画图前先要拿到绘画环境CanvasRenderingContext2D 以下简称ctx

3. 理解beginPath

   ```javascript
   ctx.beginPath();
   ```
   canvas画图 本质其实就是先构思你要画什么(绘图路径) 然后在通过 `fill` 或者 `stroke`绘制

   `beginPath`清除之前构思好的绘画路径

4. 绘制直线

   ```javascript
   ctx.moveTo(0, 0);
   ctx.lineTo(100, 100);
   ctx.stroke();
   ```

   首先先要理解坐标原点,前端页面所有的原点一般就是左上角的这个点，所以0,0点指的就是画布左上角的那个点

   然后100,100为结束点，所以直线就绘制出来了

5. 绘制长方形

   ```
   ctx.rect(0, 0, 100, 200);
   ctx.fill();
   ```

   `rect`这个方法，前2个参数是作为长方形左上角顶点的坐标，后2个参数代表长方形的长宽

6. 绘制圆

   ```
   ctx.arc(200, 200, 20, 0, 2 * Math.PI, true);
   ctx.stroke();
   ```

   `arc`这个方法可以绘制弧度，因为绘制360度，所以就变成圆了

   前2个参数代表圆心的坐标，第三个参数为半径大小，第四个参数是从几度开始绘制，绘制多少角度，绘制方向(false 顺时针，true 逆时针)

   ps: 画圆的时候就不需要考虑顺 逆了，毕竟我们是360度~

7. 配合简单实战其他的一些基础API

   ```javascript
   ctx.save();
   ctx.translate(W / 2, H / 2);
   ctx.fillStyle = "red";
   ctx.strokeStyle = "blue";
   ctx.lineWidth = 20;
   ctx.lineCap = "round";
   ctx.restore();
   ctx.clearRect(0, 0, W, H);
   ```

   - 保存当前绘图环境
   - 改变坐标原点
   - 填充颜色改为红色
   - 描边颜色改成蓝色
   - 线宽改为20
   - 线的端点样式
   - 恢复当前绘图环境
   - 清除画布

8. 实战简单特效

   `requestAnimationFrame`定时器为特效游戏的原理
   
   撸码 简单粒子效果
   
