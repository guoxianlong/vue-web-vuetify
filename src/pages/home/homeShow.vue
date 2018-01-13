<template>
  <main class="page_main_show">
    <div class="main_header" style="background-image:url(./static/images/wife/3.jpeg)">

      <div class="header_nav">
        <div class="nav_left">
          <img :src="'./static/images/icon/icon.png'" alt="">
        </div>
        <nav >
          <ul class="nav_right">
            <li v-for="(item,index) in menuList" :key="index" class="nav_item">{{item}}</li>
          </ul>
        </nav>
      </div>

      <div class="header_content">
        <h3>房东直租网</h3>
        <h4>让你租房省心，更省钱，没有中介赚差价！</h4>
        <v-btn round color="primary" primary large>点击开始吧</v-btn>
      </div>
    </div>
    <!-- 正面内容区域 -->
    <section class="main_content">

      <h5 style="font-weight:700">热门租住地</h5>
      <div class="address">
        <div @click="chooseAddress(index, item)" v-bind:class="[choosed == index ? 'choosed' : '']" v-for="(item, index) in addressList" :key="index" class="address_item">{{item}}</div>
      </div>
      <!-- 主图列表显示区域 -->
      <div class="host_main">
        <div  v-for="(item, index) in hostList" :key="index" class="host_item">
          <img :src="'./static/images/wife/'+ item+'.jpeg'" alt="">
          <div class="label">
            <v-btn small class="label_item" depressed>北欧风格</v-btn>
          </div>
          <div>
            <font style="font-size:1.6rem;font-weight:600">$150每张</font>
            <p style="font-size:1.4rem">整个图是不是非常漂亮啊</p>
          </div>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
export default {
  name: 'mainHome',
  components: {
  },
  data () {
    return {
      menuList: 'USD-手机端-发布房源/体验-故事-帮助-注册-登陆'.split('-'),
      addressList: '北京-上海-深圳-天津-南京-合肥-青岛'.split('-'),
      choosed: '0',
      hostList: '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18'.split('-')
    }
  },
  methods: {
    /**
     * @name 选择地址
     */
    chooseAddress (index, item) {
      this.choosed = index
    }
  },
  //
  activated () {}
}
</script>

<style rel="stylesheet/scss" lang="scss">
.page_main_show{
  .main_content{
    padding: 50px 100px;
    .host_main{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .host_item{
        cursor: pointer;
        position: relative;
        flex: 0 0 335px;
        // height: 200px;
        margin-top: 20px;
        overflow: hidden;
        .label{
          .label_item{
            position: absolute;
            margin-top: -40px;
            right: 10px;
            height:20px;
            font-size: 1.2rem;
            font-weight: 400;
            color: green;
          }
        }
        img{
          width: 100%;
          height: 200px;
        }
      }
    }
    .address{
      border-bottom: 1px solid rgba(0,0,0,.2);
      display: flex;
      font-size: 1.4rem;
      .address_item{
        transition: all .5s linear;
        cursor: pointer;
        margin-right: 20px;
        height: 30px;
        &.choosed{
          color: green;
          border-bottom: 2px solid green;
        }
      }
    }
  }
  .main_header{
   color: white;
    background-size: 100% auto;
    height: 475px;
    background-position-y: bottom;
    .header_content{
      margin-left: 40px;
      margin-top: 10%;
      h3{
        text-shadow: 0 0 20px #3A2D20;
        color: rgb(255, 90, 95) ;
      }
    }
    .header_nav{
      max-height: 60px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
    }
    .nav_left{
      img{
        width: 40px;
        margin: 20px;
      }
    }
    .nav_right{
      display: flex;
      list-style: none;
    }
    .nav_item{
      cursor: pointer;
      padding: 10px;
      // flex: 1;
      font-size: 1.5rem;
      min-width: 60px;
      text-align: center;
      // transition: all 1s linear;
      &:hover{
        border-bottom: 1px solid white;
      }
    }

  }
}
</style>
