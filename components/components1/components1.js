// components/components1/components1.js
Component({
  options: {
    styleIsolation: "apply-shared",//组件内样式可以影响外部页面
    styleIsolation: "shared"//页面的样式可以影响组件
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '我是组件的title'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
