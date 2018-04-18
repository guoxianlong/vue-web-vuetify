<template>
  <div>
    <!-- 控件介绍 -->
    <div class="card_item name_title">
      <h3>模板</h3>
    </div>
    <!-- 控件代码 -->
    <div class="card_item">
      <h3>Usage</h3>
      <n22-highlight lang='javascript'>

        &lt;template&gt;
    &lt;div class="page_xxxx"&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'n22Xxx',
  components: {},
  directives: {},
  data () {
    return {
    }
  },
  created () {},
  computed: {},
  methods: {
    /** @name 初始化数据 */
    init () {}
  },
  watch: {},
  mounted () {
    this.init()
  }
}
&lt;/script&gt;
&lt;style rel="stylesheet/scss" lang="scss" &gt;
.page_xxxx{

}
&lt;/style&gt;



      </n22-highlight>
    </div>
    <!-- 参数介绍 -->
  </div>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      // prop参数
      propList: [
        {attr: 'label', type: 'String', details: '左侧提示文字', default: ''},
        {attr: 'need', type: 'String', details: '必填项等提示字，默认红色', default: ''}
      ],
      slotList: [
        {name: 'right', detail: '右侧显示内容'},
        {name: 'choose', detail: '右侧显示内容外层有.choose class'}
      ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang='scss'>
</style>

