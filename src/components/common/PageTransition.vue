<template>
  <transition name="slide-x-transition">
    <navigation>
      <router-view class="child-view"></router-view>
    </navigation>
  </transition>
</template>

<script>
import Toast from '../common/Toast.vue'
export default {
  components: {
    'toast': Toast
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
.child-view {
  /*position: absolute;*/
  top: 0;
  width: 100%;
  height: 100%;
}

.loadingDialog {
  position: relative;
  width: 143px;
  min-height: 137px;
  line-height: 24px;
  padding: 8px;
  background: rgba(49, 56, 57, .9);
  text-align: center;
  border-radius: 10px;
}

.loadingDialog img {
  border-style: none;
  width: 30px;
  margin-top: 25px;
}

.loadingDialog .font-load {
  color: white;
  font-size: 1.3rem;
  margin-top: 15px;
}

.loadingDialog .font-primary {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.loadingDialog i {
  display: inline-block;
  -webkit-transform: rotate(360deg);
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
