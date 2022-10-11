// index.js
// 获取应用实例
const app = getApp()
import {getTopCate,swiper,classify} from '../../api/api.js'
Page({
  data: {
    list:[],
    currentindex:0,
    swiperlist:[], //轮播图
    classify:[], //免费直播课
  },
  highlight(e){
    //   console.log(e.currentTarget.dataset.index);
      this.setData({
            currentindex:e.currentTarget.dataset.index
          })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    getTopCate().then(res => {
        // console.log([{id:-1,title:"精选"},...res.data.data]);
        this.setData({
            list:[{id:-1,title:"精选"},...res.data.data]
        })
      }).catch(err => {
        wx.showToast({
            title: err.message,
        })
      })
      // 轮播图
      swiper().then(res => {
        console.log(res.data.data);
        this.setData({
          swiperlist:res.data.data
        })
      })
      //免费直播课
      classify().then(res => {
        console.log(res.data.data.course_list);
        this.setData({
          classify:res.data.data.course_list
        })
      })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
