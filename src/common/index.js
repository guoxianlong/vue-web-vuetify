/*
 * @Author: jdf
 * @Date: 2018-01-04 16:18:23
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-13 23:12:02
 * @desc 自定义组件集合
 */
// 引入组件
import JdFooter from './components/jd-footer'

// 定义组件集合
const components = {
  JdFooter
}

// 初始化组件
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// 当全局引入的时候执行（eg:vue.use(N22UI)）
if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
  install,
  JdFooter
}
