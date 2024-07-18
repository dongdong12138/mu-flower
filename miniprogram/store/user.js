import { observable, action } from 'mobx-miniprogram'
import { getStorageSync } from '../utils/storage'

export const userStore = observable({
  token: getStorageSync('token') || '',
  userInfo: getStorageSync('userInfo') || {},

  setToken: action(function (token) {
    this.token = token
  }),
  setUserInfo: action(function (userInfo) {
    this.userInfo = userInfo
  }),
})
