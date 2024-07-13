class WxRequest {
  defaultOptions = {
    baseUrl: '',
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    timeout: 60000,
  }

  constructor(options = {}) {
    this.options = Object.assign({}, this.defaultOptions, options)
  }

  request(options) {
    // 拼接完整的请求地址
    options.url = this.options.baseUrl + options.url

    // 合并请求参数
    const mergedOptions = { ...this.options, ...options }
    console.log('mergedOptions', mergedOptions)

    return new Promise((resolve, reject) => {
      wx.request({
        ...mergedOptions,
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
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
}

const instance = new WxRequest({
  baseUrl: 'https://gmall-prod.atguigu.cn/mall-api',
  timeout: 10000
})

export default instance
