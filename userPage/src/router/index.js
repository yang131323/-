import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from './test'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/',
    name: 'Test',
    component: resolve => require(['@/pages/Test'], resolve),
    children: [].concat(Test),
    meta: {
      title: '测试'
    }

  }
]

export default new Router({
  routes
})
