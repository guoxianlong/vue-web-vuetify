<template>
  <main class="page_main_show">
    <div class="main_header" style="background:url(./static/images/wife/3.jpeg)">

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
        <div v-bind:class="[choosed == index ? 'choosed' : '']" v-for="(item, index) in addressList" :key="index" class="address_item">{{item}}</div>
      </div>

      <div class="host_main">
        <div  v-for="(item, index) in hostList" :key="index" class="host_item">
          <img :src="'./static/images/wife/'+ item+'.jpeg'" alt="">
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
      hostList: '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16'.split('-')
    }
  },
  methods: {
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
        flex: 0 0 32%;
        height: 200px;
        margin-top: 20px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .address{
      border-bottom: 1px solid rgba(0,0,0,.2);
      display: flex;
      font-size: 1.4rem;
      .address_item{
        margin-right: 20px;
        height: 30px;
        &.choosed{
          color: green;
          border-bottom: 2px solid rgba(0,0,0,.5);
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
