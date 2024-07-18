import { ComponentWithStore } from 'mobx-miniprogram-bindings'
import { userStore } from '../../store/user'

import { toast } from '../../utils/extendApi'
import { setStorageSync } from '../../utils/storage'
import { reqLogin, reqUserInfo } from '../../api/user'

ComponentWithStore({
  data: {},
  storeBindings: {
    store: userStore,
    actions: ['setToken', 'setUserInfo']
  },
  methods: {
    login() {
      wx.login({
        success: async (res) => {
          console.log('res', res)
          if (res.code) {
            const { data } = await reqLogin(res.code)
            setStorageSync('token', data.token)
            this.setToken(data.token)
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
      this.setUserInfo(data)
      wx.navigateBack()
    }
  }
})
