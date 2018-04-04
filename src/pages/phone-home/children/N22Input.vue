<template>
  <div>
    <!-- 控件介绍 -->
    <div class="card_item">
      <h3>输入框组件</h3>
      <p>
        页面信息录入，规则
      </p>
    </div>
    <!-- 控件代码 -->
    <div class="card_item">
      <h3>Usage</h3>
      <n22-highlight lang="html" :height="400">
&lt;n22-field :label="'必填项验证'" need='*'&gt;
  &lt;n22-input type="text"
  v-model="modal.text"
  :form.sync="validate.text"
  :validator="rule.text"
  hintText="请输入" slot="right"
  /&gt;
&lt;/n22-field&gt;

&lt;n22-field :label="'身份证验证'" need='*'&gt;
  &lt;n22-input  v-model="modal.idcard"
  type="text" :form.sync="validate.idcard"
  :validator="rule.idcard"
  hintText="请输入" slot="right"
  /&gt;
&lt;/n22-field&gt;

&lt;n22-field :label="'密码验证'" need='*'&gt;
  &lt;n22-input  v-model="modal.password"
  type="password"
  :form.sync="validate.password"
  :validator="rule.password"
  hintText="请输入" slot="right"
  /&gt;
&lt;/n22-field&gt;

  &lt;n22-field :label="'文本框'" need='*'&gt;
  &lt;n22-input  v-model="modal.textarea"
  type="textarea"
  :form.sync="validate.textarea"
  :validator="rule.textarea"
  hintText="请输入" slot="right"
  /&gt;
&lt;/n22-field&gt;
      </n22-highlight>
      <br>


      <n22-highlight lang="javascript">
         rule: {
        text: {rules: ['require:必填项']},
        idcard: {rules: ['idcard:身份证错误']},
        password: {rules: ['pwd:密码验证错误']},
        textarea: {rules: []}
      },
      validate: {
        text: {status: false},
        idcard: {status: false},
        password: {status: false},
        textarea: {status: false}
      }

      // 获得页面的验证结果
      let result = window.utils.validator.judge(this.validate)
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
        {attr: 'hasIcon', type: 'Boolean', details: '是否显示操作图标', default: false},
        {attr: 'type', type: 'String', details: '输入框类型', default: 'text'},
        {attr: 'hintText', type: 'String', details: '默认显示提示内容', default: ''},
        {attr: 'inputClass', type: 'String', details: 'class会直接作用到input上面，多个以空格隔开', default: ''},
        {attr: 'listionRule', type: 'Boolean', details: '是否实时监听规则改变', default: 'false'},
        {attr: 'rows', type: 'Number', details: '当type为textarea时，设置文本区内的可见行数', default: '2'},
        {attr: 'validator', type: 'Object', details: '验证规则配置', default: 'text'},
        {attr: 'disabled', type: 'Boolean', details: '是否禁用状态', default: 'false'}
      ],
      eventList: [
        {name: 'focus', detail: '当输入框聚焦时触发', args: ''},
        {name: 'blur', detail: '当输入框失去焦点时触发', args: ''},
        {name: 'change', detail: '当输入框内容改变时触发', args: '输入框值'}
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

