/** 消息提示 */
export const toast = ({ title = '提示', icon = 'none', duration = 3000, mask = true } = {}) => {
  wx.showToast({ title, icon, duration, mask })
}

/** 模态对话框 */
export const modal = (option = {}) => {
  return new Promise(resolve => {
    const defaultOption = {
      title: '提示',
      content: '您确定执行该操作吗？',
      confirmColor: '#f3514f'
    }
    const mergedOption = Object.assign({}, defaultOption, option)
    wx.showModal({
      ...mergedOption,
      complete: ({ confirm, cancel }) => {
        confirm && resolve(true)
        cancel && resolve(false)
      }
    })
  })
}
