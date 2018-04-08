<template>
  <div>
    <!-- 控件介绍 -->
    <div class="card_item name_title">
      <h3>日历控件</h3>
      <p>
        用于移动端地址三级联动选择控件
      </p>
    </div>
    <!-- 控件代码 -->
    <div class="card_item">
      <h3>Usage</h3>
       <n22-highlight lang="html">
&lt;n22-calendar @choose="chooseDate"
              :date="new Date('2018-02-02')"
              :punchs="['2018-01-18']" &gt;
&lt;/n22-calendar&gt;
      </n22-highlight>
      <br>
      <n22-highlight lang="javascript">
chooseDate (date) {
  console.log(date)
}
      </n22-highlight>
    </div>
    <!-- 参数介绍 -->
    <div class="card_item" v-show="propList.length > 0">
      <h3>Input Properties</h3>
      <div class="table_box">
        <div class="header box_row">
          <div class="box_col">Attr</div>
          <div class="box_col">Type</div>
          <div class="box_col">Details</div>
          <div class="box_col">Default</div>
        </div>
        <!-- 内容列表 -->
        <div v-for="(item, index) in propList" :key="index" class="box_row">
          <div class="box_col">{{item.attr}}</div>
          <div class="box_col">{{item.type}}</div>
          <div class="box_col">{{item.details}}</div>
          <div class="box_col">{{item.default}}</div>
        </div>
      </div>
    </div>

    <!--事件 -->
     <div class="card_item" v-show="eventList.length > 0">
      <h3>Event</h3>
      <div class="table_box">
        <div class="header box_row">
          <div class="box_col">Name</div>
          <div class="box_col">Detail</div>
          <div class="box_col">Args</div>
        </div>
        <!-- 内容列表 -->
        <div v-for="(item, index) in eventList" :key="index" class="box_row">
          <div class="box_col">{{item.name}}</div>
          <div class="box_col">{{item.detail}}</div>
          <div class="box_col">{{item.args}}</div>
        </div>
      </div>
    </div>
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
        {attr: 'punchs', type: 'Array', details: '已经打开日期', default: []},
        {attr: 'date', type: 'Date', details: '默认显示日期', default: new Date()}
      ],
      eventList: [
        {name: 'choose', detail: '点击日期时候触发', args: '选择的日期'}
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

