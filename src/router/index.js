import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'


// import Login from '@/components/pages/login/template.vue'
// import Register from '@/components/pages/register/template.vue'
// import Index from '@/components/pages/index/template.vue'
// import Detail from '@/components/pages/detail/template.vue'
// import Edit from '@/components/pages/edit/template.vue'
// import Create from '@/components/pages/create/template.vue'
// import User from '@/components/pages/user/template.vue'
// import My from '@/components/pages/my/template.vue'

Vue.use(Router)

// const router = new Router({
//   routes: [
//     {
//       path: '/',
//       component: Index
//     },
//     {
//       path: '/login',
//       component: Login
//     },
//     {
//       path: '/register',
//       component: Register
//     },
//     {
//       path: '/detail/:blogId',
//       component: Detail
//     },
//     {
//       path: '/edit/:blogId',
//       component: Edit,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/create',
//       component: Create,
//       meta:{requiresAuth:true}
//     },
//     {
//       path: '/user/:userId',
//       component: User
//     },
//     {
//       path: '/my',
//       component: My,
//       meta:{requiresAuth:true}
//     },
//   ]
// })

//打包，异步加载对应的模块，避免了同时加载所有模块导致打包后文件过大
const router= new Router({
  routes: [
    {
      path: '/',
      component: ()=>{return import('@/components/pages/index/template.vue')}
    },
    {
      path: '/login',
      component: ()=>{return import('@/components/pages/login/template.vue')}
    },
    {
      path: '/register',
      component: ()=>{return import('@/components/pages/register/template.vue')}
    },
    {
      path: '/detail/:blogId',
      component: ()=>{return import('@/components/pages/detail/template.vue')}
    },
    {
      path: '/edit/:blogId',
      component: ()=>{return import('@/components/pages/edit/template.vue')},
      meta:{requiresAuth:true}
    },
    {
      path: '/create',
      component: ()=>{return import('@/components/pages/create/template.vue')},
      meta:{requiresAuth:true}
    },
    {
      path: '/user/:userId',
      component: ()=>{return import('@/components/pages/user/template.vue')}
    },
    {
      path: '/my',
      component: ()=>{return import('@/components/pages/my/template.vue')},
      meta:{requiresAuth:true}
    },
    
  ]
})

//每当路由切换之后，就会执行下面函数
router.beforeEach((to, from, next) => {
  //匹配当前切换的路由的meta.requiresAuth,为true就执行下一步
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    store.dispatch('checkLogin').then((res)=>{
      let isLogin=store.getters.isLogin;
      //如果没有登录，则跳转到登录页面
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})




export default router
