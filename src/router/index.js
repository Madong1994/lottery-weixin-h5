import Vue from 'vue'
import Router from 'vue-router'
import TabbarNav from '@/components/TabbarNav'
import Mine from '@/components/Mine'
import Home from '@/components/Home'
import Grab from '@/components/Grab'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
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
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/grab',
      name: 'grab',
      component: Grab
    }
  ]
});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  debugger
  if (to.path === '/') {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '' || token === null) {
      next();
    } else {
      next('/home');
    }
  } else if (to.path === '/' && from.path === '/home') {
    //什么都不做
  } else {
    let token = localStorage.getItem('Authorization');
    console.log(token)
    if (token === 'null' || token === '' || token === null) {
      next('/');
    } else {
      next();
    }
  }
});

export default router;

