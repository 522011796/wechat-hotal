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

//时间格式化插件
Vue.prototype.$moment = moment
moment.locale('zh_cn');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,  //国际化
  router,
  components: { App },
  template: '<App/>'
})
