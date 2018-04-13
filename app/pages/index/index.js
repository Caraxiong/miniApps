//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  go: function(event){
    let param = event.currentTarget.dataset.param;
    if(param === 'qg'){
      wx.navigateTo({
        url: '/pages/list/list',
      })
    } else if (param === 'yhh'){
      wx.navigateTo({
        url: '/pages/list/list',
      })
    } else if (param === 'agj') {
      wx.navigateTo({
        url: '/pages/list/list',
      })
    } else if (param === 'bm') {
      wx.navigateTo({
        url: '/pages/list/list',
      })
    }
  },
  onLoad: function () {
   
  }
})
