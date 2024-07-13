import { toast, modal } from '../../utils/extendApi'
import {
  setStorageSync, getStorageSync, removeStorageSync, clearStorageSync,
  setStorageAsync, getStorageAsync, removeStorageAsync, clearStorageAsync
} from '../../utils/storage'
import instance from '../../utils/request'

Page({
  data: {},
  showToast() {
    toast({
      title: 'Hello, World!',
      icon: 'success',
      duration: 2000,
      mask: true
    })
  },
  async showModal() {
    const result = await modal({ title: 'Hello, World!', content: 'This is a modal.', confirmColor: '#07c160' })
    console.log('result', result)
  },
  setStorage() {
    // setStorageSync('name', '张三')
    setStorageAsync('name', '张三').then(() => {
      console.log('setStorageAsync success')
    })
  },
  getStorage() {
    // const name = getStorageSync('name')
    // console.log('name', name)
    // console.log(name === '')
    getStorageAsync('name').then(res => {
      console.log('getStorageAsync', res)
    })
  },
  removeStorage() {
    // removeStorageSync('name')
    removeStorageAsync('name').then(() => {})
  },
  clearStorage() {
    // clearStorageSync()
    clearStorageAsync('name').then(() => {})
  },
  async handleRequest() {
    // const result = await instance.request({ url: '/index/findBanner' })
    // console.log('result', result)
    const result = await instance.get('/index/findBanner', { test: 'test' }, { timeout: 30000 })
    console.log('result', result)
  }
})
