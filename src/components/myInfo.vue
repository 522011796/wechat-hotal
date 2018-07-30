<template>
  <div style="padding:10px 10px;">
    <div style="background: #ffffff;border-radius: 5px;height:80px;">
      <flexbox>
        <flexbox-item :span="2">
          <div class="user-logo">

          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="user-info">
            <div class="color-434343">ricky</div>
            <div class="color-434343">xxxxxxxxxxx</div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>

    <div class="myInfoList">
      <group label-width="2.5em" label-margin-right="2em" label-align="right"  style="border-radius: 5px !important;">
        <cell is-link  value-align="left">
          <i class="fa fa-vcard"></i>
          <span class="font-12">个人信息</span>
        </cell>
        <cell is-link value-align="left">
          <i class="fa fa-envelope-o"></i>
          <span class="font-12">我的消息</span>
        </cell>
        <cell is-link value-align="left">
          <i class="fa fa-cog"></i>
          <span class="font-12">偏好设置</span>
        </cell>
        <cell is-link value-align="left">
          <i class="fa fa-edit"></i>
          <span class="font-12">开票信息</span>
        </cell>
      </group>
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
