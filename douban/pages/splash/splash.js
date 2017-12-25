// pages/splash/splash.js
'use strict';
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    loading: !0
  },
  getCache: function () {
    return new Promise(function (n) {
      app.wechat.getStorage('last_splash_data').then(function (t) {
        return t.data.expires < Date.now() ? (console.log("storage expired"), n(null)) : n(t.data)
      }).catch(function (t) {
        return n(null)
      })
    })
  },
  handleStart: function () {
    wx.switchTab({
      url: '../board/board',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var n = this;
    this.getCache().then(function (t) {
      if (t) {
        return n.setData({
          movies: t.movies,
          loading: !1
        })
      };
      app.douban.find("coming_soon", 1, 3).then(function (t) {
        return n.setData({
          movies: t.subjects,
          loading: !1
        }),app.wechat.setStorage('last_splash_data', {
            movies: t.subjects,
            expires: Date.now() + 864e5
          })
      }).then(function () {
        return console.log('storage last splash data')
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