import { BehaviorWithStore } from 'mobx-miniprogram-bindings'
import { userStore } from '../../../../store/user'

export const userBehavior = BehaviorWithStore({
  storeBindings: {
    store: userStore,
    fields: ['userInfo'],
    actions: ['setUserInfo'],
  }
})