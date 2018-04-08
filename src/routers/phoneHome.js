  // 例子首页
  const phoneHome = r => require.ensure([], () => r(require('../pages/phone-home/PhoneHome.vue')), 'phoneHome')
  const phoneMain = r => require.ensure([], () => r(require('../pages/phone-home/PhoneMain.vue')), 'phoneMain')
  const n22Address = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Address.vue')), 'n22Address')
  const n22Input = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Input.vue')), 'n22Input')
  const n22Field = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Field.vue')), 'n22Field')
  const n22TempLate = r => require.ensure([], () => r(require('../pages/phone-home/children/N22TempLate.vue')), 'n22TempLate')
  const n22Switch = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Switch.vue')), 'n22Switch')
  const n22Calendar = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Calendar.vue')), 'n22Calendar')
  const n22Tab = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Tab.vue')), 'n22Tab')
  const n22DatePicker = r => require.ensure([], () => r(require('../pages/phone-home/children/N22DatePicker.vue')), 'n22DatePicker')
  const n22Utils = r => require.ensure([], () => r(require('../pages/phone-home/children/N22Utils.vue')), 'n22Utils')

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
    }, {
      name: 'n22TempLate',
      path: '/n22TempLate',
      component: n22TempLate
    }, {
      name: 'n22Switch',
      path: '/n22Switch',
      component: n22Switch
    }, {
      name: 'n22Calendar',
      path: '/n22Calendar',
      component: n22Calendar
    }, {
      name: 'n22Tab',
      path: '/n22Tab',
      component: n22Tab
    }, {
      name: 'n22DatePicker',
      path: '/n22DatePicker',
      component: n22DatePicker
    }, {
      name: 'n22Utils',
      path: '/n22Utils',
      component: n22Utils
    }]
  }]
