// pages/login/login.js
import {yzmimg} from '../../api/api'
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        imgyzm:{}
    },


   yzm:function(e){
    // console.log(1);
    // console.log(e);
    this.yzmmm()
   },

    yzmmm(){
          yzmimg().then((res)=>{
    console.log(res.data.data.url);
    this.setData({
        imgyzm:res.data.data.url
    })
    this.imgyzm=res.data.data.url
    console.log(this.imgyzm);
})
   },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.yzmmm()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})