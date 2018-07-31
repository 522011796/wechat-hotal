// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import './style/main.css'
import VueI18n from 'vue-i18n';
import Validation from './validate/validation';
import moment from 'moment';
import VueResource from 'vue-resource';
import Vuex from 'vuex'
var axios = require('axios')

Vue.use(VueResource);
//国际化
Vue.use(VueI18n);
//表单验证插件
Vue.use(Validation);
Vue.use(Vuex);

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./lang/zh'),   // 中文语言包
  }
});

// 引用API文件
import apiReq from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$reqApi = apiReq

//时间格式化插件
Vue.prototype.$moment = moment
moment.locale('zh_cn');

//qs
import qs from 'qs'
Vue.prototype.$qs = qs

// router.beforeEach((to, from, next) => {
//   let url = location.href;
//   if (url.indexOf('code=') < 1) {
//     let redirect_url = encodeURIComponent(`https://www.rickycloud.cn/wechat-hotal#${to.path}`);
//     let url_code = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7605c75d9d12567d&redirect_uri=${redirect_url}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
//     location.href = url_code;
//   }else{
//     let mycode = url.substring(url.indexOf('code=') + 5, url.indexOf('state=') - 1);// 前台截取code
//     var params = {
//       code : mycode
//     };
//     // $reqApi.get("/userInfo.php", params ,res => {
//     //   this.openid = res.data.data.openid;
//     // });
//     axios.get("/userInfo.php", {
//         params: {
//           code: mycode
//         }
//       })
//       .then(res => {
//         //需要登录
//         var res = res.data;
//         next('/')
//       });
//   }
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,  //国际化
  router,
  components: { App },
  template: '<App/>'
})
