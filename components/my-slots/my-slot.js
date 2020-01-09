// components/my-slots/my-slot.js
Component({
  options:{
    multipleSlots:true
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  observers:{
    counter(newVal){}
  },
  // pageLifetimes:{
  //   page:{
  //     show(){监听组件所在页面显示出来的},
  //     hide() { 监听组件所在页面隐藏时 },
  //     resize(){监听组件所在页面尺寸改变时},
  //   }
  // },
  // lifetimes:{
  //   created() { 组件被创建出来时 },
  //   attached() { 组件被添加到页面时 },
  //   ready() { 组件被渲染出来时 },
  //   move() { 组件被移动到另一个节点时 },
  //   detached(){组件被移除掉时},
  // }
})
