<template>
  <section>
    <SideBox :showSide="drawer"></SideBox>
    <main>
        <!-- <v-btn class="blue lighten-2 mt-5" dark large @click.stop="drawer.show = true">
          打开个人中心
        </v-btn>
        <v-btn class="blue lighten-2 mt-5" dark large @click="to">
          打开个人中心
        </v-btn> -->
				<div  v-for="item in images" :key="item" style="width:100%">
					<!-- <v-parallax :src="'../../../static/imges/'+item+'.jpeg'" ></v-parallax> -->
					<img style="width:100%" :src="'./static/imges/'+item+'.jpeg'" alt="">
				</div>
    </main>
  </section>
</template>

<script>
import Vue from "vue";
import SideBox from "../../components/common/SideBox";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "mainHome",
  components: {
    SideBox
  },
  data() {
    return {
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      drawer: {
        show: false
      }
    };
  },
  created() {},
  methods: {
    /**
     * 跳转至home页面
     */
    toHome() {},
    /**
     * 跳转至饿了么仿写页面
     */
    to() {
      location.href = "../../../dist/index.html";
    }
  },
  //
  activated() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
