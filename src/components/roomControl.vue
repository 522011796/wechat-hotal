<template>
  <div style="padding:10px 10px;">
    <div class="pull-left" style="width: 50px;">
      <div class="control-menu">
        <router-link to="/roomControl/deng">
          <img src="../assets/deng.png" class="img-class">
        </router-link>
      </div>
      <div class="control-menu">
        <router-link to="/roomControl/kongtiao">
          <img src="../assets/kongtiao.png" class="img-class">
        </router-link>
      </div>
      <div class="control-menu">
        <router-link to="/roomControl/chuanglian">
          <img src="../assets/chuanglian.png" class="img-class">
        </router-link>
      </div>
      <div class="control-menu">
        <router-link to="/roomControl/yinxiang">
          <img src="../assets/yinxiang.png" class="img-class">
        </router-link>
      </div>
    </div>
    <div class="control-right-opr">
      <router-view></router-view>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
  import { Group,GroupTitle,Cell,Panel,Flexbox, FlexboxItem } from 'vux'
  export default {
  components: { Group,GroupTitle,Cell,Panel,Flexbox, FlexboxItem},
  name: 'index',
  data () {
    return {
      msg:''
    }
  }
}
</script>
