/*
 |-------------------------------------------------------------------------------
 | routes.js
 |-------------------------------------------------------------------------------
 | Contains all of the routes for the application
 */

/**
 * Imports Vue and VueRouter to extend with the routes.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store.js';

/**
 * Extends Vue to use Vue Router
 */
Vue.use( VueRouter )

function requireAuth(to, from, next) {
    function proceed() {
        // 如果用户信息已经加载并且不为空则说明该用户已登录，可以继续访问路由，否则跳转到首页
        // 这个功能类似 Laravel 中的 auth 中间件
        if (store.getters.getUserLoadStatus() === 2) {
            if (store.getters.getUser != '') {
                next();
            } else {
                next('/home');
            }
        }
    }

    if (store.getters.getUserLoadStatus() !== 2) {
        // 如果用户信息未加载完毕则先加载
        store.dispatch('loadUser');

        // 监听用户信息加载状态，加载完成后调用 proceed 方法继续后续操作
        store.watch(store.getters.getUserLoadStatus, function () {
            if (store.getters.getUserLoadStatus() === 2) {
                proceed();
            }
        });
    } else {
        // 如果用户信息加载完毕直接调用 proceed 方法
        proceed()
    }
}
/**
 * Makes a new VueRouter that we will use to run all of the routes for the app.
 */
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {name: 'cafes'},
            name: 'layout',
            component: Vue.component('Home', require('./layouts/Layout.vue').default),
            children: [
                {
                    path: 'cafes',
                    name: 'cafes',
                    component: Vue.component('Home', require('./pages/Home.vue').default),
                    children: [
                        {
                            path: 'new',
                            name: 'newcafe',
                            component: Vue.component('NewCafe', require('./pages/NewCafe.vue').default),
                            beforeEnter: requireAuth
                        },
                        {
                            path: ':id',
                            name: 'cafe',
                            component: Vue.component('Cafe', require('./pages/Cafe.vue').default)
                        },
                        {
                            path: 'cities/:slug',
                            name: 'city',
                            component: Vue.component( 'City', require( './pages/City.vue' ).default)
                        }
                    ]
                },
                {
                    path: 'cafes/:id/edit',
                    name: 'editcafe',
                    component: Vue.component('EditCafe', require('./pages/EditCafe.vue').default),
                    beforeEnter: requireAuth,
                    meta: {
                        permission: 'user'
                    }
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: Vue.component('Profile', require('./pages/Profile.vue').default),
                    beforeEnter: requireAuth
                },
                {
                    path: '_=_',
                    redirect: '/'
                }
            ]
        }
    ]
});