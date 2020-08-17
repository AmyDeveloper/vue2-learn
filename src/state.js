import { observe } from "./observer/index.js"
import { proxy } from './utils.js'

export function initState(vm) {
  const opts = vm.$options
  if (opts.props) {
    initProps(vm)
  }
  if (opts.methods) {
    initMethods(vm)
  }
  if(opts.data) {
    initData(vm)
  }
  if(opts.computed) {
    initComputed(vm)
  }
  if(opts.watch) {
    initWatch(vm)
  }
}

function initProps() {}
function initMethods() {}


function initData(vm) { // 数据的初始化操作
  let data = vm.$options.data
  vm._data = data = typeof data === 'function' ? data.call(vm) : data

  // 数据的劫持 对象Object.defineProperty, 数组单独处理

  // vm上取值时 代理到vm._data
  for(let key in data) {
    proxy(vm, '_data', key)
  }
  observe(data)
}
function initComputed() {}
function initWatch() {}