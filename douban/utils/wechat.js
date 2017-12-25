"use strict";
function login() {
  return new Promise(function (e, t) {
    wx.login({
      success: e,
      fail: t
    })
  })
}
function getUserInfo() {
  return new Promise(function (e, t) {
    wx.getUserInfo({
      success: e,
      fail: t
    })
  })
}
function setStorage(e, t) {
  return new Promise(function (n, o) {
    wx.setStorage({
      key: e,
      data: t,
      success: n,
      fail: o
    })
  })
}
function getStorage(e) {
  return new Promise(function (t, n) {
    wx.getStorage({
      key: e,
      success: t,
      fail: n
    })
  })
}
function getLocation(e) {
  return new Promise(function (t, n) {
    wx.getLocation({
      type: e,
      success: t,
      fail: n
    })
  })
}


module.exports = {
  login: login,
  getUserInfo: getUserInfo,
  setStorage: setStorage,
  getStorage: getStorage,
  getLocation: getLocation,
  original: wx
}