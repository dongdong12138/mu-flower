class WxRequest {
  defaultOptions = {
    baseUrl: '',
    method: 'GET',
    header: {
      'content-type': 'application/json'
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
}

const instance = new WxRequest({
  baseUrl: 'https://gmall-prod.atguigu.cn/mall-api',
  timeout: 10000
})

export default instance
