import { toast } from '../../utils/extendApi'
import { setStorageSync } from '../../utils/storage'
import { reqLogin, reqUserInfo } from '../../api/user'

Page({
  data: {},
  onLoad: function (options) {

  },
  login() {
    wx.login({
      success: async (res) => {
        console.log('res', res)
        if (res.code) {
          const { data } = await reqLogin(res.code)
          setStorageSync('token', data.token)
          this.getUserInfo()
        } else {
          toast({ title: '授权失败，请重新授权' })
        }
      }
    })
  },
  async getUserInfo() {
    const { data } = await reqUserInfo()
    setStorageSync('userInfo', data)
  }
})
