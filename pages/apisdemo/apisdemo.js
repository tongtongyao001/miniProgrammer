// pages/apisdemo/apisdemo.js
import request from '../../utils/axios.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    wx.showToast({
      title: '正在loading',
      icon: 'loading',
      duration: 2000,
      success(){},
      fail(){},
      complete(){}
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   // url: 'http:xxxxx',
    //   url:'http://httpbin.org/post',
    //   data:{},//请求传递的数据
    //   method: 'post',//请求方式
    //   // method:'get',//请求方式
    //   success:function(res){
    //     console.log(res)
    //   },
    //   fail(){}
    // })
    request({
      url:'http://httpbin.org'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      conosle.log(err)
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
  onShareAppMessage: function (options) {
    return {
      title:'hi,iris',
    }
  }
})