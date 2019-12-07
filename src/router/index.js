import Vue from 'vue'
import Router from 'vue-router'
import TabbarNav from '@/components/TabbarNav'
import Mine from '@/components/Mine'
import Home from '@/components/Home'
import Grab from '@/components/Grab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tabbarNav',
      name: 'tabbarNav',
      component: TabbarNav
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/grab',
      name: 'grab',
      component: Grab
    }
  ]
})
