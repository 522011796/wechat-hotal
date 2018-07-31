<template>
  <div>
    <div class="index-top-block" style="position: relative;z-index: 2">
      <div class="index-room-no">{{roomNo}}--{{openid}}</div>
    </div>
    <div class="main">
      <div class="font-12 margin-top10 color-434343">房控</div>
      <div style="height: calc(100% + 1px);">
        <flexbox class="margin-top10">
          <flexbox-item>
            <div class="index-left-top">
              <div class="index-right-top">
                <div class="index-left-item">
                  <div style="width: 6.5rem;height:6.5rem;border-radius:6.5rem;border:1px solid #dddddd;margin:0 auto;position: relative;top:1.5rem;">
                    <img src="../assets/locks.png" style="height:5rem;width: 4rem;margin-top:0.6rem;">
                  </div>
                  <div class="color-8a8a8a font-10" style="position: relative;top:1.5rem;">开门</div>
                </div>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item :span="6">
            <div class="index-right-top">
              <div class="index-right-item">
                <div class="index-right-item-child">
                  <img src="../assets/yuyue.png" style="height:3rem;width: 3rem;margin-top:0.6rem;">
                  <span class="font-10 color-8a8a8a" style="position: relative;top:-1rem;">预约退房</span>
                </div>
                <div class="index-right-item-child margin-top10">
                  <img src="../assets/deng-2.png" style="height:3rem;width: 3rem;">
                  <span class="font-10 color-8a8a8a" style="position: relative;top:-0.5rem;">开关全开/关</span>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
        <flexbox class="margin-top15">
          <flexbox-item><div class="index-list-item font-12 color-8a8a8a">情景1</div></flexbox-item>
          <flexbox-item><div class="index-list-item font-12 color-8a8a8a">情景2</div></flexbox-item>
          <flexbox-item><div class="index-list-item font-12 color-8a8a8a">情景3</div></flexbox-item>
          <flexbox-item><div class="index-list-item font-12 color-8a8a8a">情景4</div></flexbox-item>
        </flexbox>
      </div>
    </div>

    <div class="margin-top15" style="background: #f3f3f3;padding:0px 10px 10px 10px;overflow-x:scroll">
      <div class="font-12 color-434343 padding-tb-10">服务</div>
      <flexbox>
        <flexbox-item><div class="index-list-item font-12 color-8a8a8a">服务1</div></flexbox-item>
        <flexbox-item><div class="index-list-item font-12 color-8a8a8a">服务2</div></flexbox-item>
        <flexbox-item><div class="index-list-item font-12 color-8a8a8a">服务3</div></flexbox-item>
        <flexbox-item><div class="index-list-item font-12 color-8a8a8a">服务4</div></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  const appId = 'wx7605c75d9d12567d';
  const appSecret = '80b20533b5a84cec3b778af140d39582';
  //const redrect_url = 'https://www.rickycloud.cn/wechat-hotal/#/';
  //const url_code = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7605c75d9d12567d&redirect_uri="+redrect_url+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
  //const url_code2 = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7605c75d9d12567d&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";

  import { Group,GroupTitle,Cell,Tabbar,TabbarItem,ViewBox,Flexbox, FlexboxItem } from 'vux'
  export default {
  components: { Group,GroupTitle,Cell,Tabbar,TabbarItem,ViewBox,Flexbox, FlexboxItem},
  name: 'index',
  data () {
    return {
      roomNo: '暂无房间号',
      openid: ''
    }
  },
  created(){

  },
  methods:{
    init(){

    }
  }
}
</script>
