// components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mytitles: {
      type:Array,
      value:[]
    },
    // currentIndex:{
    //   type:Number,
    //   value:0
    // }
    // counter:{
    //   type:Number,
    //   value:0
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // handelAdd(){
    //   this.triggerEvent('addData',{})
    // }
    handleItemClick(event){
      console.log(event)
      this.setData({
        currentIndex:event.currentTarget.dataset.index
      })
      this.triggerEvent('handleClick',{currentIndex:this.data.currentIndex})
    },
    increseData(num){
      this.setData({
        counter: this.data.counter+num
      })
    }
  }
})
