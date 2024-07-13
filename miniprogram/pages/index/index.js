import { toast, modal } from '../../utils/extendApi'

Page({
  data: {},
  showToast() {
    toast({
      title: 'Hello, World!',
      icon: 'success',
      duration: 2000,
      mask: true
    })
  },
  async showModal() {
    const result = await modal({ title: 'Hello, World!', content: 'This is a modal.', confirmColor: '#07c160' })
    console.log('result', result)
  }
})
