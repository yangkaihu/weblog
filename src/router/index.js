import {createRouter,createWebHistory}     from "vue-router";

const routes =[
    {
        name: '登录',
        path:'/login',
        component: () => import('../pages/Login/login.vue')
    }
];
//  这里不是通过new  创建， 通过createRouter 方法创建， 使用的模式不是通过mode 来定义
const router = createRouter({
    routes,
    history: createWebHistory(),
})
export default router
