import WxRequest from './request'
import env from './env'

const instance = new WxRequest({
  baseUrl: env.baseURL + '/mall-api',
  timeout: 10000,
  // showLoading: false,
})

instance.interceptors.request = config => {
  const token = wx.getStorageSync('token')
  if (token) {
    config.header.token = token
  }
  return config
}

instance.interceptors.response = async response => {
  const { isSuccess, data } = response
  if (!isSuccess) {
    wx.showToast({ title: '网络异常，请稍后重试~', icon: 'error' })
    return Promise.reject(response)
  }
  switch (data.code) {
    case 200:
      return data
    case 208:
      const modalStatus = await wx.showModal({ title: '提示', content: '登录授权过期，请重新登录！', showCancel: false })
      // 如果点击了确定，先清空本地的 token，然后跳转到登录页面
      if (modalStatus) {
        wx.clearStorageSync()
        wx.navigateTo({ url: '/pages/login/login' })
      }
      return Promise.reject(response)
    default:
      wx.showToast({ title: '程序出现异常，请联系客服或稍后重试！', icon: 'none' })
      return Promise.reject(response)
  }
}

export default instance
