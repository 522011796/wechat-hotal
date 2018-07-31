<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Tabbar,TabbarItem,ViewBox,XHeader } from 'vux';
export default {
  components: {Tabbar,TabbarItem,ViewBox,XHeader},
  name: 'App'
}
</script>


<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
