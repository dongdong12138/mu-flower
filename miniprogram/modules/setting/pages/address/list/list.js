Page({
  data: {
    addressList: [1, 2, 3]
    // addressList: []
  },
  toEdit() {
    wx.navigateTo({
      url: '/modules/settingModule/pages/address/add/index'
    })
  }
})