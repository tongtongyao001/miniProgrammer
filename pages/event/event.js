// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    transferData:['haha','lala','dala']
  },

  handleClick(){
    console.log('按钮点击')
  },
  handleClickBox(event){
    console.log(event.currentTarget.dataset)
  }
})