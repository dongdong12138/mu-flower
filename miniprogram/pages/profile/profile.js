Page({
  data: {
    isShowPopup: false,
  },
  onUpdateNickName() {
    this.setData({ isShowPopup: true })
  },
  cancelForm() {
    this.setData({ isShowPopup: false })
  }
})