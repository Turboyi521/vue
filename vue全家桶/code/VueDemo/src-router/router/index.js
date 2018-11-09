/*
路由器模板
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import MessageDetail from '../components/MessageDetail.vue'

// 声明使用插件
Vue.use(VueRouter)

// 创建路由器, 配置路由
export default new VueRouter({
  linkActiveClass: 'activeClass', // 指定选中的路由链接的class
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // path: '/home/news',
          path: 'news',
          component: News
        },
        {
          path: '',
          redirect: '/home/news'
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail/:id',
              component: MessageDetail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    },
  ]
})