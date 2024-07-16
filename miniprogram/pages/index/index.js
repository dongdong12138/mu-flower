import { reqIndexData } from '../../api/index'

Page({
  data: {
    bannerList: []
  },
  onLoad(query) {
    this.getIndexData()
  },
  async getIndexData() {
    const result = await reqIndexData().catch(err => err)
    console.log('result', result)
    this.setData({
      bannerList: result[0].data
    })
  },
})
