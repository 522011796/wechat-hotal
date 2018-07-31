import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'
import Layout from '@/components/layout'
import Index from '@/components/index'
import MyInfo from '@/components/myInfo'
import RoomControl from '@/components/roomControl'
import RoomControlDeng from '@/components/roomControl-deng'
import RoomControlKongtiao from '@/components/roomControl-kongtiao'
import RoomControlYinxiang from '@/components/roomControl-yinxiang'
import RoomControlChuanglian from '@/components/roomControl-chuanglian'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/',
      //name: 'Home',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'index',
          component: Index
        },
        {
          path: '/myInfo',
          name: 'MyInfo',
          component: MyInfo
        },
        {
          path: '/roomControl',
          name: 'RoomControl',
          component: RoomControl,
          children:[
            {
              path: '/roomControl/deng',
              name: 'RoomControlDeng',
              component: RoomControlDeng,
            },
            {
              path: '/roomControl/kongtiao',
              name: 'RoomControlKongtiao',
              component: RoomControlKongtiao,
            },
            {
              path: '/roomControl/chuanglian',
              name: 'RoomControlChuanglian',
              component: RoomControlChuanglian,
            },
            {
              path: '/roomControl/yinxiang',
              name: 'RoomControlYinxiang',
              component: RoomControlYinxiang,
            }
          ]
        }
      ]
    }
  ]
});

