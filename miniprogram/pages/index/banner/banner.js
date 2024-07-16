Component({
  properties: {
    bannerList: { type: Array, value: [] }
  },
  data: {
    activeIndex: 0
  },
  methods: {
    getSwiperIndex(event) {
      const { current } = event.detail
      this.setData({ activeIndex: current })
    }
  }
})
