import { reqIndexData } from '../../api/index'

Page({
  data: {
    bannerList: [],
    categoryList: [],
    activeList: [],
    guessList: [],
    hotList: [],
    loading: true,
  },
  onLoad(query) {
    this.getIndexData()
  },
  async getIndexData() {
    const result = await reqIndexData().catch(err => err)
    this.setData({
      bannerList: result[0].data,
      categoryList: result[1].data,
      activeList: result[2].data,
      guessList: result[3].data,
      hotList: result[4].data,
      loading: false,
    })
  },
})
