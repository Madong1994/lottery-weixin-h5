import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        openid: localStorage.getItem('openid') ? localStorage.getItem('openid') : ''
    },

    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin(state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        },
        // 修改token，并将token存入localStorage
        changeOpenid(state, openid) {
            state.openid = openid;
            localStorage.setItem('openid', openid);
        }
    }
});

export default store;