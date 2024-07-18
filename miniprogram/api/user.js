import http from '../utils/http'

/** 登录 */
export const reqLogin = (code) => http.get(`/weixin/wxLogin/${code}`)

/** 获取用户信息 */
export const reqUserInfo = () => {
  return http.get('/weixin/getuserInfo')
}