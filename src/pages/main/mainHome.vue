<template>
  <section>
    <main>
      <section>
        <v-parallax src="./static/images/section.jpeg" :height="screenHeight">
          <v-layout column align-center justify-center class="white--text">
            <img :src="'./static/images/vuetify.png'" style="cursor: pointer;">
            <h1 class="white--text mb-2 display-3">小v世界</h1>
            <div class="headline mb-3 text-xs-center">欢迎来到vue世界</div>
            <v-btn class="blue lighten-2 mt-5" dark large @click="toHome">
              开始小v之旅
            </v-btn>
            <v-btn class="blue lighten-2 mt-5" dark large @click="toGitHub">
              GITHUB
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  name: 'mainHome',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    /**
     * 跳转至home页面
     */
    toHome () {
      this.$router.push({ name: 'homeShow' })
    },
    /**
     *
     */
    toGitHub () {
      location.href = 'https://github.com/jdfdcc/'
    }
  },
  //
  activated () {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >

</style>
