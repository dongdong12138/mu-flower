import http from '../utils/http'

/** 查询商品分类数据 */
export const reqCategoryData = () => {
  return http.get('/index/findCategoryTree')
}
