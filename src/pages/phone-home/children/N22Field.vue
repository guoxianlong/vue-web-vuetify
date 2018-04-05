<template>
  <div>
    <!-- 控件介绍 -->
    <div class="card_item name_title">
      <h3>左右布局插件</h3>
      <p>
        控制左右布局
      </p>
    </div>
    <!-- 控件代码 -->
    <div class="card_item">
      <h3>Usage</h3>
      <n22-highlight lang='html' >
          &lt;n22-field :label="'地址'" need='*'&gt;
      &lt;n22-address slot="right"&gt;&lt;/n22-address&gt;
    &lt;/n22-field&gt;
        </n22-highlight>
    </div>
    <!-- 参数介绍 -->
    <div class="card_item" v-show="propList && propList.length > 0">
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
     <div class="card_item" v-show="eventList && eventList.length > 0">
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

    <!--slot -->
     <div class="card_item" v-show="slotList && slotList.length > 0">
      <h3>Slot</h3>
      <div class="table_box">
        <div class="header box_row">
          <div class="box_col">Name</div>
          <div class="box_col">Detail</div>
        </div>
        <!-- 内容列表 -->
        <div v-for="(item, index) in slotList" :key="index" class="box_row">
          <div class="box_col">{{item.name}}</div>
          <div class="box_col">{{item.detail}}</div>
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

