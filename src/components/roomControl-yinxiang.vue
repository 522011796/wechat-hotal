<template>
  <div style="padding:10px 10px;position: relative">
    <div>
      <div class="control-opr-title">音响</div>
      <div style="width: 70%">
        <div class="margin-top10">
          <div class="control-opr-img text-center">
            <div><img src="../assets/bluetooth2.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">蓝牙</div>
          </div>
        </div>
        <div class="">
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/source-plus.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">音量减</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/source-muti.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">音量加</div>
          </div>
          <div style="clear: both"></div>
        </div>
        <div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/music-up.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">上一曲</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/stop.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">暂停</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/music-down.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">下一曲</div>
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
