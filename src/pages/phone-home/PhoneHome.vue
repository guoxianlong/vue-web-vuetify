<template>
  <div class="nav_main">
    <!-- 左边 -->
    <div class="nav_left" :style="{flex:mini ? '0 0 80px' : '0 0 300px'}">
      <v-navigation-drawer stateless hide-overlay :mini-variant.sync="mini" v-model="drawer">
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="../../../static/images/icon/icon.png"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>移动端框架说明</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" @click="toMenu(item.url)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div class="nav_center">
      <router-view class="child-view" style="min-height:100vh"></router-view>
    </div>
    <div  class="nav_right">
      <div class="box_main_phone">
        <iframe class="phone_demo" src="https://jdfdcc.github.io/jdf-phone-ui/dep/" frameborder="0"></iframe>
      </div>
    </div>
   </div>
</template>
<script>
export default {
  name: 'ukhome',
  data () {
    return {
      drawer: true,
      items: [
        { title: '框架说明', icon: 'home', url: 'phoneMain' },
        { title: '开发模板', icon: 'question_answer', url: '' },
        { title: 'Field组件', icon: 'question_answer', url: 'n22Field' },
        { title: '地址控件', icon: 'add_location', url: 'n22Address' },
        { title: '地图控件', icon: 'edit_location', url: 'n22Map' },
        { title: '性别控件', icon: 'check_circle', url: 'n22Switch' },
        { title: '日历控件', icon: 'date_range', url: 'n22Calendar' },
        { title: '输入框控件', icon: 'zoom_in', url: 'n22Input' },
        { title: '缩放控件', icon: 'zoom_in', url: 'n22Zoom' },
        { title: 'Tab组件', icon: 'tab', url: 'n22Tab' },
        { title: '日期组件', icon: 'date_range', url: 'n22DatePicker' },
        { title: '自定义轮播图', icon: 'question_answer', url: '' },
        { title: '视频', icon: 'video_library', url: 'n22Video' },
        { title: '签字', icon: 'assignment', url: 'n22Sign' },
        { title: '公共方法介绍', icon: 'settings_input_composite', url: 'n22Utils' }
      ],
      mini: true,
      right: null
    }
  },
  methods: {
    toMenu (url) {
      this.$router.push({name: url})
    }
  },
  created () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import './../../assets/css/phone_out';
.navigation-drawer--close:not(.navigation--permanent).navigation-drawer:not(.navigation-drawer--right){
  transform:none!important;
  margin-top: 0px;
}
.nav_main{
  display: flex;
  .nav_left{
    flex: 0 0 300px;
  }
  .nav_center{
    flex: 1px;
    padding: 20px;
  }
  .nav_right{
    flex: 0 0 400px;
  }
}
.box_main_phone{
  flex: 0 0 400px;
  position: fixed;
  // top: 10px;
  right: 10px;
  width:380px;
  height:740px;
  display: flex;
  justify-content: center;
  // align-items: center;
  padding-top: 80px;
  // padding: 70px 20px 80px 30px;
  background-size: 100% 100%;
  background-image: url('./../../../static/images/ios_bg.png');
  // background-position-x: -110px;
 .phone_demo{
    width:320px;
    height:568px;
  }
}
</style>
