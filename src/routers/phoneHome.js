  // 例子首页
  const phoneHome = r => require.ensure([], () => r(require('../pages/phone-home/PhoneHome.vue')), 'phoneHome')
  const phoneMain = r => require.ensure([], () => r(require('../pages/phone-home/PhoneMain.vue')), 'phoneMain')
  const n22Address = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Address.vue')), 'n22Address')
  const n22Input = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Input.vue')), 'n22Input')
  const n22Field = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Field.vue')), 'n22Field')
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
    }, {
      name: 'n22Input',
      path: '/n22Input',
      component: n22Input
    }, {
      name: 'n22Field',
      path: '/n22Field',
      component: n22Field
    }]
  }]
