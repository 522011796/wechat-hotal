<template>
  <div style="padding:10px 10px;position: relative">
    <img src="../assets/kongtiao-bg.png" style="position: absolute;right:0;top:0;height:50px;width: 100px">
    <div>
      <div class="control-opr-title">空调</div>
      <div style="width: 70%">
        <div class="margin-top10">
          <div class="control-opr-img text-center">
            <div><img src="../assets/switch.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">开关</div>
          </div>
        </div>
        <div class="">
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/chushi.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">除湿</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/songfeng.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">送风</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/fengsu.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">风速</div>
          </div>
          <div style="clear: both"></div>
        </div>
        <div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/zhire.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">制热</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/zhilen.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">制冷</div>
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
