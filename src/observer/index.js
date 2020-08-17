import { arrayMethods } from './array.js'
import { defineProperty } from '../utils.js'

class Observer {
  constructor(value) {
    // value.__ob__ = this
    // 对象是否被观测过 是否有'__ob__'属性

    defineProperty(value, '__ob__', this)

    if (Array.isArray(value)){
      // push pop shift unshift splice reverse sort  改变数组
      // 函数劫持
      value.__proto__ = arrayMethods
      // 数组中的对象类型
      this.observeArray(value)
    } else {
      // defineProperty 重新定义属性
      this.walk(value)
    }
  }
  observeArray(value) {
    value.forEach(item => {
      observe(item)
    })
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
      return value
    },
    set(newValue) {
      if (newValue == value) return
      observe(newValue) // 如果将值改为对象 继续观测
      value = newValue
    }
  })
}

export function observe(data) {
  if(typeof data !== 'object' || data === null) {
    return data
  }
  if(data.__ob__) return data
  return new Observer(data)
}