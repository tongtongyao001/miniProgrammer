// pages/componentdemo3/componentdemo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0
  },
  handelMyAdd(event){
    console.log(11)
    this.setData({
      count: this.data.count+1
    })
  },
  itemClicked(event){
    console.log(event,1)
  },
  handlePageClick(){
    const my_cnp = this.selectComponent('#counterCpt')
    my_cnp.increseData(20)
  }
  
})