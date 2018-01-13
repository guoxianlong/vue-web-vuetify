<template>
  <section>
    <v-navigation-drawer absolute persistent light v-model="showSide.show" overflow>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../../assets/img/common/tx.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>江道丰</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="showSide.show = false">
                返回
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  name: 'sideBox',
  props: {
    showSide: Object
  },
  components: {
  },
  data () {
    return {
      mini: false,
      right: null,
      items: [
        { title: '首页', icon: 'dashboard' },
        { title: '登陆', icon: 'dashboard' }
      ]
    }
  },
  methods: {
  },
  computed: {
  },
  activated () {
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
