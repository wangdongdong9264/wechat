
bind 事件绑定不会阻止事件向上冒泡，catch 事件绑定可以阻止冒泡事件向上冒泡


wx.redirectTo 接口实现不保留当前页面跳转到新页面，wx.navigateTo相反



> douban 

splash > board > list > item

> 待解决


```
splash
indicator-dots  // 是否显示面板指示点
mode        //图片的显示方式


board
box-sizing

<block></block>     //将多个标签包裹起来


common > movie-list
cursor  //定义鼠标悬浮在元素上方显示的鼠标光点
vertical-align      // 用来指定行内元素或表格单元格元素的垂直对齐方式

search 
is      // is属性可以使用Mustache语法，来动态决定具体需要渲染那个模板<template>
```

>board

1. box-sizing
    * content-box   //让元素维持标准的w3c 标准
    * border-box    //维持传统的ie标准 < ie6

> item

wx:if / hidden 区别

wx:if 在初始渲染条件为false时不渲染，在条件第一次条件为true/条件切换时开始渲染  切换时耗能(局部渲染)

hidden 组件会始终渲染 初始时耗能