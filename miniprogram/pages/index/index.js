import { reqIndexData } from '../../api/index'

Page({
  data: {
    bannerList: [],
    categoryList: [],
    activeList: [],
  },
  onLoad(query) {
    this.getIndexData()
  },
  async getIndexData() {
    const result = await reqIndexData().catch(err => err)
    console.log('result', result)
    this.setData({
      bannerList: result[0].data,
      categoryList: result[1].data,
      activeList: result[2].data,
    })
  },
})
