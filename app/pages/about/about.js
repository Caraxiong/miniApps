// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    controls:[{
      id: 1,
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      iconPath: '/pages/resources/location.png',
      clickable: true
    }],
    markers: [{
      id:0,
      latitude: 30.2315500000,
      longitude: 120.1497400000,
      iconPath: '/pages/resources/marker.png'
    }],
    polyline: [{
      points: [{
        longitude: 120.1497400000,
        latitude: 30.2315500000
      }, {
        longitude: 120.1283300000,
        latitude: 30.2221000000
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }]
  },
  controltap(e) {
    console.log(e.controlId)
  },
  markertap(e){
    console.log(e.markerId)
  },
  regionchange(e){
    console.log(e.type)
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