import { initState } from './state'
import { compileToFunctions } from './compiler/index.js'


// 在原型上添加一个 init 方法
export function initMixin(Vue) {
  // 初始化流程
  Vue.prototype._init = function(options) {

    // 数据劫持
    const vm = this // vue中使用 this.$options 指代用户传递的属性
    vm.$options = options
    // 初始化状态（劫持状态 改变视图）
    initState(vm)

    // 渲染
    // 传了 el 属性，开始渲染
    if(vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }

  Vue.prototype.$mount = function (el) {
    // 挂载
    const vm = this
    const options = vm.$options
    el = document.querySelector(el)
    if (!options.render) { // 无 render 方法，将 template 转为 render 方法
      let template = options.template
      if (!template && el) {
        // 拿 el 中的所有值
        template = el.outerHTML
      }
      // console.log('template', template) // 拿到el所有html 赋给template
      const render = compileToFunctions(template) // 将 template 编译为 render 方法
      options.render = render
    }
    // console.log('options.render', options.render)
  }
}