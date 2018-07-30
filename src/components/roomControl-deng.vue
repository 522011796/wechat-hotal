<template>
  <div style="padding:10px 10px;position: relative">
    <img src="../assets/diaodeng.png" style="position: absolute;right:0;top:0;height:120px;width: 200px">
    <div>
      <div class="control-opr-title">灯</div>
      <div style="width: 70%;">
        <div class="margin-top10">
          <div class="control-opr-img text-center">
            <div><img src="../assets/switch.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">全程</div>
          </div>
        </div>
        <div class="">
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/switch-1.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">开关1</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/switch-1.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">开关1</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/switch-1.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">开关1</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/switch-1.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">开关1</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/switch-1.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">开关1</div>
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
