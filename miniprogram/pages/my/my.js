Page({
  data: {
    initpanel: [
      {
        url: '/pages/order/list/list',
        title: '商品订单',
        iconfont: 'icon-dingdan'
      },
      {
        url: '/pages/order/list/list',
        title: '礼品卡订单',
        iconfont: 'icon-lipinka'
      },
      {
        url: '/pages/order/list/list',
        title: '退款/售后',
        iconfont: 'icon-tuikuan'
      }
    ]
  },
  onLoad: function (options) {

  },
  // 跳转到登录页面
  toLoginPage() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  }
})