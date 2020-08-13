let oldArrayProtoMetthods = Array.prototype


// 继承
export let arrayMethods = Object.create(oldArrayProtoMetthods)

let methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'sort',
  'reverse',
  'splice',
]

methods.forEach(method => {
  arrayMethods[method] = function(...args) {
    console.log('[[[[[[[')
    const result = oldArrayProtoMetthods[method].apply(this, args)
    let interted
    let ob = this.__ob__
    switch (method) {
      case 'push':
      case 'unshift': // 追加的内容可能是对象 应该被再次劫持
        interted = args
        break
      case 'splice':
        interted = args.slice(2) // arr.splice(start, [deletecount, [item1....]])
        break;
      default:
        break;
    }
    if(interted) ob.observeArray(interted) // 数组新增的值进行观测 this ---> observer 中的 value
    return result
  }
})