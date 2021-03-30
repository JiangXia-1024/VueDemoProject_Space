import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/components/Demo1'
import Demo2 from '@/components/Demo2'
import Demo3 from '@/components/Demo3'
import User from '@/components/User'
import Dangfengjianse from '@/components/Dangfengjianse'
import zhang1 from '@/components/zhang1'
import lunbotu from '@/components/lunbotu'
import fangzhuangdonghua from '@/components/fangzhuangdonghua'
import Maper from '@/components/Maper'
import guolvqi from '@/components/guolvqi'
import shijian from '@/components/shijian'
import zidingyizhiling from '@/components/zidingyizhiling'
import zicomponent from '@/components/zicomponent'
import fucomponent from '@/components/fucomponent'
import Demo4 from '@/components/Demo4'
import Demo5 from '@/components/Demo5'
import PersonManagementDemo from '@/components/PersonManagementDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta:{
        title:'helloworld',
      },
      component: HelloWorld,
    },{
      path:'/zicomponent',
      name:'zicomponent',
      meta:{
       title:'子组件'
     },
      component:zicomponent
    },{
      path:'/fuzujian',
      name:'fucomponent',
      meta:{
       title:'父组件'
     },
      component:fucomponent
    },{
       path: '/Demo',
          name: 'Demo1', 
          meta:{
            title:'Demo1',
          },
          component: Demo1,
    },
    {
          path:'/Demo2',
          name:'Demo2',
          meta:{
            title:'Demo2',
          },
          component:Demo2,
    },
    {
          path:"/Demo3",
          name:"Demo3",
          meta:{
            title:"Demo3",
          },
          component: Demo3,
        },
        {
          path:"/User",
          name:"User",
          meta:{
            title:"User",
          },
          component: User,
        },
        {
          path:"/Dangfengjianse",
          name:"Dangfengjianse",
          meta:{
            title:"党风建设",
          },
          component: Dangfengjianse,
        },
        {
          path:"/zhang1",
          name:"zhang",
          meta:{
            title:"工会福利",
          },
          component: zhang1,
        },
        {
          path:"/lunbotu",
          name:"lunbotu",
          meta:{
            title:"轮播图",
          },
          component: lunbotu,
        },
        {
          path:"/fangzhuangdonghua",
          name:"fangzhuangdonghua",
          meta:{
            title:"翻转动画",
          },
          component: fangzhuangdonghua,
        },
        {
          path:"/guolvqi",
          name:"guolvqi",
          meta:{
            title:'过滤器'
          },
          component:guolvqi
        },{
           path:'/shijian',
           name:'shijian',
           meta:{
            title:'时间格式化'
          },
           component:shijian
         },{
          path:'/zidingyizhiling',
          name:'zidingyizhiling',
          meta:{
           title:'自定义指令'
         },
          component:zidingyizhiling
        }
        ,
    {
          path:'/Demo4',
          name:'Demo4',
          meta:{
            title:'Demo4',
          },
          component:Demo4,
    },
    {
        path:'/Demo5',
        name:'/Demo5',
        meta:{
          title:'Demo5--Vue内置指令学习',
        },
        component:Demo5,
    },
    {
        path:'/PersonManagementDemo',
        name:'/PersonManagementDemo',
        meta:{
          title:'人事管理系统',
        },
        component:PersonManagementDemo
    }
  ]
})
