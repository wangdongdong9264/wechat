// pages/search/search.js
"use strict";
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    size:20,
    subtitle:"请在此输入搜索内容",
    movies:[],
    search:"",
    loading:!1,
    hasMore:!1
  },
  loadMore:function(){
    var t= this;
    if (this.data.hasMore) return this.setData({
      subtitle:"加载中...",
      loading:!0,
    }),app.douban.find("search",this.data.page++,this.data.size,this.data.search).then(function(a){
      console.log(a);
      a.subjects.length?t.setData({
        subtitle:"a.title",
        movies: t.data.movies.concat(a.subjects),
        loading:!1
      }):t.setData({
          hasMore: !1,
          loading: !1
      })
    }).catch(function(a){
      t.setData({
        subtitle:"获取数据异常",
        loading:!1
      }),
      console.error(a);
    })
  },
  
  handleSearch:function(t){
    t.detail.value && (this.setData({
      movies:[],
      page:1
    }),
    this.setData({
      subtitle:"加载中...",
      hasMore:!0,
      loading:!0,
      search:t.detail.value
    }),
    this.loadMore())
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    this.setDate({
      movies:[],
      page:1
    }),
    this.loadMore()
.then(function(){
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