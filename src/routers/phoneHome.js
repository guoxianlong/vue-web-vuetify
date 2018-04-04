  // 例子首页
  const phoneHome = r => require.ensure([], () => r(require('../pages/phone-home/PhoneHome.vue')), 'phoneHome')
  const phoneMain = r => require.ensure([], () => r(require('../pages/phone-home/PhoneMain.vue')), 'phoneMain')
  const n22Address = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Address.vue')), 'n22Address')
  export default [{
    name: 'phoneHome',
    path: '/phoneHome',
    component: phoneHome,
    children: [{
      name: 'phoneMain',
      path: '/phoneMain',
      component: phoneMain
    }, {
      name: 'n22Address',
      path: '/n22Address',
      component: n22Address
    }]
  }]
