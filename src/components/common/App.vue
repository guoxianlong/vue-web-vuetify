<template>
  <v-app>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  created() {
    // utils.wx.wxConfig().then(req => {
    //   console.log("获取微信配置返回数据", req)
    // });
  }
}
</script>
