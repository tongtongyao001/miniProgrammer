// pages/demo/demo.js
// getApp()可以获取APP()产生的示例对象
const app = getApp()
console.log(1,app.globalData.place)
// 注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  handleGetUserInfo(event) {
    console.log(2, event)
  },
  /**
   * 生命周期函数--监听页面加载-页面加载出来
   */
  onLoad: function (options) {
    // wx.getUserInfo({
    //   success:res=>{
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成-只渲染一次
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示 -每次进入页面，显示出页面的时候都会实现
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

  },
  // 监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('到底部了：',)
  },
  // 下拉刷新-必须在Page.json里面设置下拉刷新true
  onPullDownRefresh(){

  },
  chooseImage(){
    wx.chooseImage({
      success: function(res) {
        console.log(res)
      },
    })
  },
  handleScroll(obj){
    console.log(obj,1)
  }
})
/* 
注册Page做的事情
1.生命周期，请求数据
2.初始化数据
3.监听其他事件，页面滚动


 */


/* 

image默认320*240 行内块
image src="/表示绝对路径"
在相册选择图片
 */