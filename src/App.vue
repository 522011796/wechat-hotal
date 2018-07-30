<template>
  <div id="app">
    <div style="height:100%;">
      <view-box ref="viewBox">
        <router-view></router-view>
        <tabbar slot="bottom"  style="position: fixed;bottom:0;height:50px;width: 100%">
          <tabbar-item link="/">
            <i slot="icon" class="fa fa-home"></i>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item link="/RoomControl/deng">
            <i slot="icon" class="fa fa-dot-circle-o"></i>
            <span slot="label">房控</span>
          </tabbar-item>
          <tabbar-item link="/myInfo">
            <i slot="icon" class="fa fa-user-o"></i>
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </div>
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
