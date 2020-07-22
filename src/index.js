import { initMixin } from './init'

function Vue(options) {
  // vue 初始化
  this._init(options)
}

initMixin(Vue)


export default Vue