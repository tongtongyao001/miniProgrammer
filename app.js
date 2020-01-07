//app.js
// 注册一个小程序实例
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow(options){
    console.log(options)
  },
  // - 小程序初始化，退出小程序之后，大概两个小时再进来的时候，会重新初始化小程序
  onLoad(){},
  onErro(){},
  globalData: {
    userInfo: null,
    place:'全局的place'
  }
})
/* 
APP里面可以做的事情
1.判断场景值 onLauch onShow
2.监听生命周期
3.APP（）实例只有一个，可以共享数据

 */