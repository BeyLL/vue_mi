import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "米家登录",
            component: () => import('@/views/login/index.vue')
        },
        {
            path: "/",
            name: "parent",
            component: () => import(/* webpackChunkName: "about" */ "@/views/show/index.vue"),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/show/home/index.vue')
                },
                {
                    path: '/category',
                    name: 'category',
                    component: () => import('@/views/show/category/index.vue')
                },
                {
                    path: '/discover',
                    name: 'discover',
                    component: () => import('@/views/show/discover/index.vue')
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: () => import('@/views/show/cart/index.vue')
                },
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('@/views/show/user/index.vue')
                }
            ]
            
            
        },
        {
            path: `/detail:id`,
            name: '小米商品详情',
            component: () => import('@/views/detail/index.vue')
        }
    ]
});


//进行权限判断’
// router.beforeEach((to, from, next) => {
//     const isLogin = sessionStorage.getItem('token');
// if (!isLogin) {
//     if (to.path === '/login') {
//         next()
//     } else {
//         return next({ path: '/login' });
//     }

// } else {
//     if (to.path === '/login') {
//         return next({ path: '/index' })
//     } else {
//         next()
//     }
// }
// })


export default router;