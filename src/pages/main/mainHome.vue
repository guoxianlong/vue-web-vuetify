<template>
  <section>
    <main>
      <section>
        <v-parallax :src="path3" :height="screenHeight">
          <v-layout column align-center justify-center class="white--text">
            <img :src="path2" style="cursor: pointer;">
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
import Vue from 'vue'
import store from '../../vuex/store'

import {
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  name: 'mainHome',
  components: {
  },
  data() {
    return {
      path1: require('../../assets/img/hero.jpeg'),
      path2: require('../../assets/img/vuetify.png'),
      path3: require('../../assets/img/section.jpeg'),
    }
  },
  created() {
  },
  methods: {
    /**
     * 跳转至home页面
     */
    toHome() {
      this.$router.push({ name: "homeShow" })
    },
    /**
     *
     */
    toGitHub(){
      location.href = "https://github.com/jiangdaofengdcc/main"
    }
  },
  //
  activated() {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >

</style>
