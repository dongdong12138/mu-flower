import { toast } from '../../utils/extendApi'
import { setStorageSync } from '../../utils/storage'
import { reqLogin } from '../../api/user'

Page({
  data: {},
  onLoad: function (options) {

  },
  login() {
    wx.login({
      async success(res) {
        console.log('res', res)
        if (res.code) {
          const { data } = await reqLogin(res.code)
          setStorageSync('token', data.token)
        } else {
          toast({ title: '授权失败，请重新授权' })
        }
      }
    })
  }
})
