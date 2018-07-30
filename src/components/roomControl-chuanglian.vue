<template>
  <div style="padding:10px 10px;">
    <img src="../assets/chuanglian-bg.png" style="position: absolute;right:0;top:20px;height:190px;width: 240px">
    <div>
      <div class="control-opr-title">窗帘</div>
      <div style="width: 70%;">
        <div style="position: absolute;bottom:4rem;">
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/open.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">全开</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/stop.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">暂停</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/close.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">全关</div>
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
    </div>
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
