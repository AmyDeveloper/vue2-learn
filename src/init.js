import { initState } from './state'


// 在原型上添加一个 init 方法
export function initMixin(Vue) {
  // 初始化流程
  Vue.prototype._init = function(options) {

    // 数据劫持
    const vm = this // vue中使用 this.$options 指代用户传递的属性
    vm.$options = options
    // 初始化状态（劫持状态 改变视图）
    initState(vm)
  }
}