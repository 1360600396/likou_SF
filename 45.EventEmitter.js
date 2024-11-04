class HMEmmiter {
  #handlers = {}
  // 注册事件
  $on(event, callback) {
    if (!this.#handlers[event]) {
      this.#handlers[event] = []
    }
    this.#handlers[event].push(callback)
  }
  // 触发事件
  $emit(event, ...args) {
    const funcs = this.#handlers[event] || []
    funcs.forEach(func => {
      func(...args)
    })
  }
  // 移除事件
  $off(event) {
    this.#handlers[event] = undefined
  }
  // 一次性事件
  $once(event, callback) {
    this.$on(event, (...args) => {
      callback(...args)
      this.$off(event)
    })
  }
}
