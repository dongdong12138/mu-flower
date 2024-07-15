import { reqIndexData } from '../../api/index'

Page({
  data: {},
  onLoad(query) {
    this.getIndexData()
  },
  async getIndexData() {
    const result = await reqIndexData().catch(err => err)
    console.log('result', result)
  },
})
