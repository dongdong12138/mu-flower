import { reqCategoryData } from '../../api/category'

Page({
  data: {
    categoryList: [],
    activeIndex: 0
  },
  onLoad(options) {
    this.getCategoryList()
  },
  async getCategoryList() {
    const result = await reqCategoryData()
    console.log('result', result)
    if (result.code === 200) {
      this.setData({ categoryList: result.data })
    }
  },
  onCategoryTap(event) {
    const { index } = event.currentTarget.dataset
    this.setData({ activeIndex: index })
  }
})
