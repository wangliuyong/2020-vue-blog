import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/pages/HelloWorld'
import Login from '@/components/pages/login/template.vue'
import Register from '@/components/pages/register/template.vue'
import Index from '@/components/pages/index/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
