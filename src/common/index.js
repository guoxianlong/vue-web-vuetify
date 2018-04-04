/*
 * @Author: jdf
 * @Date: 2018-01-04 16:18:23
 * @Last Modified by: jdf
 * @Last Modified time: 2018-04-04 11:45:58
 * @desc 自定义组件集合
 */
// 引入组件
import JdFooter from './components/jd-footer'
import N22Highlight from './components/n22-highlight'

// 定义组件集合
const components = {
  JdFooter,
  N22Highlight
}

// 初始化组件
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// 当全局引入的时候执行（eg:vue.use(N22UI)）
if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
components.install = install
export default components
