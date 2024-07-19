import http from '../utils/http'

/** 登录 */
export const reqLogin = (code) => http.get(`/weixin/wxLogin/${code}`)

/** 获取用户信息 */
export const reqUserInfo = () => {
  return http.get('/weixin/getuserInfo')
}

/** 更新用户信息 */
export const reqUpdateUserInfo = (userInfo) => {
  return http.post('/weixin/updateUser', userInfo)
}

/** 上传文件 */
export const reqUploadFile = (filePath, name) => {
  return http.upload('/fileUpload', filePath, name)
}
