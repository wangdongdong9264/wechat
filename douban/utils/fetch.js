"use strict";
module.exports = function (e, s, t) {
  return new Promise(function (n, r) {
    wx.request({
      url: e + "/" + s,
      data: Object.assign({}, t),
      header: { "Content-Type": "json" },
      success: n,
      fail: r
    })
  })
}