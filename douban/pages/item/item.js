// pages/item/item.js
"use strict";
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    loading: !0,
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var i=this;
    app.douban.findOne(options.id).then(function (options){
      i.setData({
        title: options.title,
        movie:options,
        loading: !1
      }),
      wx.setNavigationBarTitle({
        title: options.title +" « 电影 « 豆瓣"
      })
    }).catch(function(e){
      i.setData({
        title:"获取数据异常",
        movie:{},
        loading:!1
      }),
      console.log(e)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title +" « 电影 « 豆瓣"
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:"没有标题",
      desc:"没有描述 哈哈哈 ：）",
      path:"/pages/item?id="+this.data.id
    }
  }
})