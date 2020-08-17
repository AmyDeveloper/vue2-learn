export function proxy(vm, data, key) {
  Object.defineProperty(vm, key, {
    get() { // vm.a
      return vm[data][key]
    },
    set(newValue) { // vm.a = 200
      vm[data][key] = newValue
    }
  })
}

export function defineProperty(target, key, value) {
  Object.defineProperty(target, key, {
    enumerable: false, // 不可枚举
    configurable: false, // 不可被删除
    value,
  })
}