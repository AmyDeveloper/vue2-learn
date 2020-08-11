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
  arrayMethods[method] = function() {
    console.log('[[[[[[[')
    const result = oldArrayProtoMetthods[method].apply(this, arguments)
    return result
  }
})