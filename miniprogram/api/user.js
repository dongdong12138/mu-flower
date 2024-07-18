import http from '../utils/http'

/** 登录 */
export const reqLogin = (code) => http.get(`/weixin/wxLogin/${code}`)
