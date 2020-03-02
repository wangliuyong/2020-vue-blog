import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/components/pages/login/template.vue'
import Register from '@/components/pages/register/template.vue'
import Index from '@/components/pages/index/template.vue'
import Detail from '@/components/pages/detail/template.vue'
import Edit from '@/components/pages/edit/template.vue'
import Create from '@/components/pages/create/template.vue'
import User from '@/components/pages/user/template.vue'
import My from '@/components/pages/my/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta:{requiresAuth:true}
    },
    {
      path: '/create',
      component: Create,
      meta:{requiresAuth:true}
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/my',
      component: My,
      meta:{requiresAuth:true}
    },
  ]
})
