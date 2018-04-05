<template>
  <div class="page_phone_main">
    <h1><a href="https://github.com/jdfdcc/jdf-phone-ui" target="_Black">N22 UI</a> 使用文档</h1>
    <p class="title_text">本文将介绍 N22 UI 的安装方式和基本的用法。</p>
    <!-- 前期准备 -->
    <div class="phone_card_item">
      <h2>前期准备</h2>
      <p>
          1、项目依赖node如果没有安装node的同事，请自行去官网下载安装 : <a href="https://nodejs.org/en/"  target="_Blank">nodejs</a>
          <br/>
          2、仔细阅读开发规范：<a href="https://cn.vuejs.org/v2/style-guide/"  target="_Blank">开发指南</a>
          <!-- <br/> -->
          <!-- 开发注意点：<a href="https://nodejs.org/en/"  target="_Blank">传送门</a> -->
          <!-- <br/> -->
          <!-- 组件配置参数说明：<a href="https://nodejs.org/en/"  target="_Blank">传送门</a> -->
          <br/>
          3、iosApp下载地址：<a href="https://www.pgyer.com/foCF"  target="_Blank">App示例</a>
      </p>
    </div>

    <!-- 技术栈 -->
    <div class="phone_card_item">
      <h2>技术栈</h2>
      <p>
          1、vue: <a href="https://cn.vuejs.org/"  target="_Blank">官网</a>、
              <a href="https://github.com/vuejs/vue"  target="_Blank">GitHub</a>
          <br/>
          2、mint-ui：<a href="http://mint-ui.github.io/#!/zh-cn"  target="_Blank">官网</a>、
                    <a href="https://github.com/ElemeFE/mint-ui/"  target="_Blank">GitHub</a>
          <br/>
          3、vue-router：<a href="https://cn.vuejs.org/v2/guide/migration-vue-router.html#ad"  target="_Blank">官网</a>、
                        <a href="https://github.com/vuejs/vue-router"  target="_Blank">GitHub</a>
          <br/>
          4、vuex：<a href="https://cn.vuejs.org/v2/guide/migration-vuex.html#ad"  target="_Blank">官网</a>、
                  <a href="https://github.com/vuejs/vuex"  target="_Blank">GitHub</a>
          <br/>
          5、axios：<a href="https://github.com/axios/axios"  target="_Blank">GitHub</a>
      </p>
    </div>

    <!-- 特别说明 -->
     <div class="phone_card_item">
      <h2>特别说明</h2>
      <p>
        项目属于初期使用阶段，如果有同事在使用过程中出现问题，请及时反馈提交
        <a href="https://github.com/jdfdcc/jdf-phone-ui/issues" target="_Blank">issues</a>
        ，也方便更新到框架基础库上面;希望大家多多提建议，贡献自己的力量，共同维护，创建更好的产品。
      </p>
    </div>

   </div>
</template>
<script>
export default {
  name: 'ukhome',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import './../../assets/css/vars';
.page_phone_main{
  font-size: 1.3rem;
  color:$normal-color;
  line-height: 30px;
  padding-top: $pd-hg;
  h1{
    // color: $primary-color;
    font-weight: 400;
    font-size: 3rem;
  }
  .title_text{
    border-bottom: 1px solid $divider-color;
  }
  .phone_card_item{
    margin-top: 2.3rem;
    font-size: 1.3rem;
    // font-weight: 500;
    h2{
      font-size: 1.8rem;
      font-weight: 500;
      margin: 10px 0px;
    }
  }
}
</style>
