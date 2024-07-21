import { reqAddressList, reqDelAddress } from '../../../api/address'
import { modal, toast } from '../../../../../utils/extendApi'
import { swipeCellBehavior } from '../../../../../behaviors/swipeCell'

Page({
  behaviors: [swipeCellBehavior],
  data: {
    addressList: []
  },
  onLoad(options) {
    this.flag = options.flag
    this.getAddressList()
  },
  onShow() {
    this.getAddressList()
  },
  async getAddressList() {
    const { data: addressList } = await reqAddressList().catch(err => console.log(err))
    this.setData({ addressList })
  },
  async delAddress(event) {
    const { id } = event.currentTarget.dataset
    const modalRes = await modal({
      content: '您确认删除该收货地址吗 ?'
    })
    if (modalRes) {
      await reqDelAddress(id)
      toast({ title: '收货地址删除成功' })
      this.getAddressList()
    }
  },
  changeAddress(event) {
    if (this.flag !== '1') return
    const addressId = event.currentTarget.dataset.id
    const selectAddress = this.data.addressList.find((item) => item.id === addressId)
    if (selectAddress) {
      app.globalData.address = selectAddress
      wx.navigateBack()
    }
  },
  toEdit(event) {
    const { id } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/modules/setting/pages/address/add/add?id=${id}`
    })
  },
})