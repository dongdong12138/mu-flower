/** 存储数据到 Storage - 同步 */
export const setStorageSync = (key, value) => {
  try {
    wx.setStorageSync(key, value)
  } catch (err) {
    console.error(`存储指定 ${key} 数据发生错误:`, err)
  }
}

/** 从 Storage 获取数据 - 同步 */
export const getStorageSync = (key) => {
  try {
    return wx.getStorageSync(key)
  } catch (err) {
    console.error(`获取指定 ${key} 数据发生错误:`, err)
  }
}

/** 移除 Storage 中指定数据 - 同步 */
export const removeStorageSync = (key) => {
  try {
    wx.removeStorageSync(key)
  } catch (err) {
    console.error(`移除指定 ${key} 数据发生错误:`, err)
  }
}

/** 清空 Storage - 同步 */
export const clearStorageSync = () => {
  try {
    wx.clearStorageSync()
  } catch (err) {
    console.error('清空本地存储时发生错误:', err)
  }
}

/** 存储数据到 Storage - 异步 */
export const setStorageAsync = (key, data) => {
  return new Promise(resolve => {
    wx.setStorage({
      key, data,
      complete(res) {
        resolve(res)
      }
    })
  })
}

/** 从 Storage 获取数据 - 异步 */
export const getStorageAsync = (key) => {
  return new Promise(resolve => {
    wx.getStorage({
      key,
      complete(res) {
        resolve(res)
      }
    })
  })
}

/** 移除 Storage 中指定数据 - 异步 */
export const removeStorageAsync = (key) => {
  return new Promise(resolve => {
    wx.removeStorage({
      key,
      complete(res) {
        resolve(res)
      }
    })
  })
}

/** 清空 Storage - 异步 */
export const clearStorageAsync = () => {
  return new Promise(resolve => {
    wx.clearStorage({
      complete(res) {
        resolve(res)
      }
    })
  })
}
