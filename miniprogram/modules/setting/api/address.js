import http from '../../../utils/http'

/** 获取收货地址列表 */
export const reqAddressList = () => {
  return http.get('/userAddress/findUserAddress')
}

/**
 * @description 删除收货地址
 * @param {*} id 收货地址 id
 * @returns Promise
 */
export const reqDelAddress = (id) => {
  return http.get(`/userAddress/delete/${id}`)
}
