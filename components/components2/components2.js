// components/components2/components2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String
    title:{
      type: String,
      value:'我是默认的',
      observer: function (newVal, oldVal){//观察当前数据的变化
      }
    }
  },
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
