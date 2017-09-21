<template>
  <div id="main">
    <router-view class="child-view" style="min-height:100vh"></router-view>
  </div>
</template>
<script>
export default {
  name: 'main',
  data() {
    return {
    }
  }
  // created() {
  //   if (isBack) {
  //     this.transitionName = 'slide-right'
  //   } else {
  //     this.transitionName = 'slide-left'
  //   }
  // }
}
</script>
<style rel="stylesheet/scss" lang="scss" >

</style>
