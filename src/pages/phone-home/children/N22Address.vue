<template>
  <div>
    <!-- 控件介绍 -->
    <div class="card_item">
      <h3>地址控件</h3>
      <p>
        用于移动端地址三级联动选择控件
      </p>
    </div>
    <!-- 控件代码 -->
    <div class="card_item">
      <h3>Usage</h3>
      <n22-highlight lang='html' >
          &lt;n22-address  :disabled = "disabled"
                      @choose="choose"
                      :province.sync="address.province"
                      :city.sync="address.city"
                      :area.sync="address.area"
                      slot="right"&gt;
          &lt;/n22-address&gt;
            </n22-highlight>
            <br>
            <n22-highlight lang="javascript">
        // data 绑定数据
        disabled: false,
        address: {
          province: '',
          city: '',
          area: ''
        }

        //方法 塞入默认值
        setValue () {
          this.address.province = '610000'
          this.address.city = '610100'
          this.address.area = '610104'
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
        </div>
        <!-- 内容列表 -->
        <div v-for="(item, index) in propList" :key="index" class="box_row">
          <div class="box_col">{{item.attr}}</div>
          <div class="box_col">{{item.type}}</div>
          <div class="box_col">{{item.details}}</div>
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
      propList: [{
        attr: 'province',
        type: 'String',
        details: '省的code或者中文'
      },
      {
        attr: 'city',
        type: 'String',
        details: '市的code或者中文'
      },
      {
        attr: 'area',
        type: 'String',
        details: '区的code或者中文'
      },
      {
        attr: 'label',
        type: 'String',
        details: '无值时提示语'
      },
      {
        attr: 'disabled',
        type: 'Boolean',
        details: '是否禁用'
      }],
      // 事件列表
      eventList: [{
        name: 'choose',
        detail: '当选择区的时候触发',
        args: '这个地址对象'
      }]
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

