<template>
  <div>
    <img src="../assets/bg.png" style="height:100%;width: 100%;position: absolute">
  </div>
</template>

<script>
  import { Group,GroupTitle,Cell,Tabbar,TabbarItem,ViewBox,Flexbox, FlexboxItem } from 'vux'
  export default {
  components: { Group,GroupTitle,Cell,Tabbar,TabbarItem,ViewBox,Flexbox, FlexboxItem},
  name: 'welcome',
  data () {
    return {
      roomNo: '暂无房间号'
    }
  },
  created(){
    var _self = this;
    setTimeout(function () {
      _self.init();
    },1500);
  },
  methods:{
    init(){
      let url = location.href;
      let wx_appid = url.substring(url.indexOf('wx_appid=') + 9, url.indexOf('ukey=') - 1);
      let ukey = url.substring(url.indexOf('ukey=') + 5);
      if (url.indexOf('code=') < 1) {
        let redirect_url = encodeURIComponent(`https://www.rickycloud.cn/wechat-hotal/#/welcome`);
        let url_code = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+wx_appid+"&redirect_uri="+redirect_url+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
        window.location = url_code;
      }else{
        let mycode = url.substring(url.indexOf('code=') + 5, url.indexOf('state=') - 1);// 前台截取code
        var params = {
          code : mycode
        };
        this.$reqApi.get("/userInfo.php", params ,res => {
          this.openid = res.data.data.openid;
          localStorage.removeItem("openid");
          localStorage.removeItem("nickname");
          localStorage.removeItem("headerurl");
          console.log(res.data.data.openid);
          localStorage.setItem("openid",res.data.data.openid);
          localStorage.setItem("nickname",res.data.data.nickname);
          localStorage.setItem("headerurl",res.data.data.headimgurl);
          localStorage.setItem("ukey",ukey);
          this.$router.push("/");
        });
      }
      console.log(111);
    }
  }
}
</script>
