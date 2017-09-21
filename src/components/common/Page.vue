<template>
  <div class="content-scroll" ref="content">
    <div class="content" v-bind:style="{'min-height':screenHeight - 65 +'px'}">
      <slot></slot>
    </div>
    <LogoFooter></LogoFooter>
  </div>
</template>

<script>
import LogoFooter from './../common/LogoFooter.vue'

export default {
  name: 'page',
  props: ['paddingBottom', 'hideFooter', 'wBg', 'isListenerScroll'],
  components: {
    LogoFooter,
  },
  data() {
    return {
      scrollTop: 0,
      screenHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    //监听body滚动
    addEventListener(barOffSetTop) {
      let self = this;
      let oldPath = null;
      window.addEventListener('scroll', function(event) {
        try {
          //菜单栏吸附功能(注：菜单栏id:nav-sticky必须是page标签的一级子标签)
          let parentDom = document.getElementsByClassName('content')[0];
          let targetDom = document.getElementById('nav-sticky');
          let copyDom = document.getElementById('copyDom')
          //只有需要菜单栏吸附的时候，才监听
          if (barOffSetTop < document.body.scrollTop && !copyDom) {
            let copyDomNode = targetDom.cloneNode(true);
            copyDomNode.id = 'copyDom';
            parentDom.insertBefore(copyDomNode, targetDom);
            targetDom.classList.add('add-fixed');
          } else if (barOffSetTop > document.body.scrollTop && copyDom) {
            parentDom.removeChild(copyDom);
            targetDom.classList.remove('add-fixed');
          }

          //当页面跳转的时候，点击的一瞬间，document.body.scrollTop会取到新页面的0，这里做比对判断，只取当前页面的body.scrollTop
          if (!oldPath || self.$route.path == oldPath) {
            //记录当前滚动位置
            self.scrollTop = document.body.scrollTop;
          }
          oldPath = self.$route.path;
        } catch (error) {
        }

      })
    }
  },
  computed: {
    gapButtom() {
      //默认65px的下间距
      return this.hideFooter ? 0 : (this.paddingBottom ? this.paddingBottom : 65);
    }
  },
  activated() {
    document.body.scrollTop = this.scrollTop;
  },
  mounted() {
    if (this.isListenerScroll) {
      setTimeout(() => {
        this.addEventListener(document.getElementById('nav-sticky').offsetTop);
      }, 500)
    }
  }
}
</script>

<style scoped>
.content-scroll {
  /* padding: 0 10px;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 0px;
  bottom: 0px;
  overflow: auto;
  -webkit-overflow-scrolling: touch; */
}

.content {
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.prevent-margin-merge {
  width: 100px;
  height: 0.1px
}
</style>
