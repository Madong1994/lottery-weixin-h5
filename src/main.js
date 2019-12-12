// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Vconsole from 'vconsole';
import App from './App'
import router from './router'
import store from './vuex/store'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload } from 'vant'
import utils from './api/tool/urlGet'

Vue.use(Vuex)
// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Vant)
Vue.prototype.$utils = utils;
Vue.config.productionTip = false
let vConsole = new Vconsole()
Vue.use(vConsole)
// router.beforeEach((to, from, next) => {
//   if (to.name == "login") {
//     // next("/home");
//     next();
//   } else {
//     next();
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
