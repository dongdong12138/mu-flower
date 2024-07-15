const { miniProgram: { envVersion } } = wx.getAccountInfoSync()

const env = {
  baseURL: 'https://gmall-prod.atguigu.cn'
}

switch (envVersion) {
  case 'develop':
    env.baseURL = 'https://gmall-prod.atguigu.cn'
    break
  case 'trial':
    env.baseURL = 'https://gmall-prod.atguigu.cn'
    break
  case 'release':
    env.baseURL = 'https://gmall-prod.atguigu.cn'
    break
}

export default env
