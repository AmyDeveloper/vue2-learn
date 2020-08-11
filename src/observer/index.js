import { arrayMethods } from './array.js'

class Observer {
  constructor(value) {
    if (Array.isArray(value)){
      // push pop shift unshift splice reverse sort  改变数组
      // 函数劫持 切片编程
      value.__proto__ = arrayMethods
      // 数组中的对象类型
      this.observeArray(value)
    } else {
      // defineProperty 重新定义属性
      this.walk(value)

    }
  }
  observeArray(value) {

  }
  walk(data) {
    const keys = Object.keys(data)
    keys.forEach(key => defineReactive(data, key, data[key]))
  }
}

function defineReactive(data, key, value) {
  observe(value) // 如果值是对象 递归 进行观测
  Object.defineProperty(data, key, {
    get() {
      console.log('-----get')
      return value
    },
    set(newValue) {
      console.log('+++++set')
      if (newValue == value) return
      observe(newValue) // 如果将值改为对象 继续观测
      value = newValue
    }
  })
}

export function observe(data) {
  if(typeof data !== 'object' || data == null) {
    return
  }
  return new Observer(data)
}