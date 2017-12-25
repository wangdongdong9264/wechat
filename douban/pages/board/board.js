// pages/board/board.js
"use strict";
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    boards:[
      {
        key:"in_theaters"
      },
      {
        key:"coming_soon"
      },
      {
        key:"top250"
      }
    ],
    loading: !0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var n=this,
    o=this.data.boards.map(function(n){
      return app.douban.find(n.key,1,10).then(function(o){
        return n.title=o.title,n.movies=o.subjects,n
      })
    });
    Promise.all(o).then(function(o){
      return n.setData({
        boards:o,
        loading:!1
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  }
})