// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg1:'传递的数据',
    arr1:[
      {name:'haha1',age:18,id:1},
      {name:'haha2',age:18,id:2},
      {name:'hah3',age:18,id:3}
    ],
    count:0
  },
  hanleClick() {
    console.log(this.data.count)
    this.setData({
      count: this.data.count + 1
    })
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