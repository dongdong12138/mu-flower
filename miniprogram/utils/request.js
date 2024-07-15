import { toast } from './extendApi'

class WxRequest {
  defaultOptions = {
    baseUrl: '',
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    timeout: 60000,
    showLoading: true,
  }

  interceptors = {
    request: config => config,
    response: response => response
  }

  queue = []

  constructor(options = {}) {
    this.options = Object.assign({}, this.defaultOptions, options)
  }

  request(options) {
    this.timerId && clearTimeout(this.timerId)

    // 拼接完整的请求地址
    options.url = this.options.baseUrl + options.url

    // 合并请求参数
    let mergedOptions = { ...this.options, ...options }

    // 显示 loading
    if (mergedOptions.showLoading) {
      this.queue.length === 0 && wx.showLoading({ title: '数据加载中...' })
      this.queue.push('request')
    }

    // 请求拦截器
    mergedOptions = this.interceptors.request(mergedOptions)

    return new Promise((resolve, reject) => {
      wx.request({
        ...mergedOptions,
        success: (res) => {
          // 合并响应结果与请求参数
          const mergedRes = { ...res, config: { ...mergedOptions }, isSuccess: true }
          // 响应拦截器
          const resultRes = this.interceptors.response(mergedRes)
          resolve(resultRes)
        },
        fail: (err) => {
          // 合并错误信息与请求参数
          const mergedErr = { ...err, config: { ...mergedOptions }, isSuccess: false }
          // 响应拦截器
          const resultErr = this.interceptors.response(mergedErr)
          reject(resultErr)
        },
        complete: () => {
          if (!mergedOptions.showLoading) return
          this.queue.pop()
          this.queue.length === 0 && this.queue.push('request')
          this.timerId = setTimeout(() => {
            this.queue.pop()
            this.queue.length === 0 && wx.hideLoading()
          }, 100)
        }
      })
    })
  }

  get(url, data = {}, options = {}) {
    const mergedOptions = { url, data, method: 'GET', ...options }
    return this.request(mergedOptions)
  }

  post(url, data = {}, options = {}) {
    const mergedOptions = { url, data, method: 'POST', ...options }
    return this.request(mergedOptions)
  }

  put(url, data = {}, options = {}) {
    const mergedOptions = { url, data, method: 'PUT', ...options }
    return this.request(mergedOptions)
  }

  delete(url, data = {}, options = {}) {
    const mergedOptions = { url, data, method: 'DELETE', ...options }
    return this.request(mergedOptions)
  }

  all(...promises) {
    return Promise.all(promises)
  }
}

export default WxRequest
