  // 例子首页
  const ukhome = r => require.ensure([], () => r(require('../pages/uk-home/ukhome.vue')), 'ukhome')
  export default [{
    name: 'ukhome',
    path: '/ukhome',
    component: ukhome
  }]
