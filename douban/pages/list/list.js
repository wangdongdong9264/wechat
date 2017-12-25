// pages/list/list.js
"use strict";
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    subtitle: "加载中...",
    type: "in_theaters",
    loading: !0,
    hasMore: !0,
    page: 1,
    size: 20,
    movies: []
  },

  loadMore: function () {
    var t = this;
    if (this.data.hasMore) {
      return this.setData({
        subtitle: "加载中...",
        loading: !0
      }), app.douban.find(this.data.type, this.data.page++, this.data.size).then(function (a) {
        a.subjects.length ? t.setData({
          subtitle: a.title,
          movies: t.data.movies.concat(a.subjects),
          loading: !1
        }) : t.setData({
          subtitle: a.title,
          hasMore: !1,
          loading: !1
        })
      }).catch(function (a) {
        t.setData({
          subtitle: "获取数据异常",
          loading: !1
        }), console.error(a)
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.title = options.title || this.data.title, this.data.type = options.type || this.data.type,
      this.loadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title + " « 电影 « 豆瓣",
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
    this.setData({
      movies: [],
      page: 1,
      hasMore: !0
    }),
      this.loadMore().then(function () {
        return app.wechat.original.stopPullDownRefresh()
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})