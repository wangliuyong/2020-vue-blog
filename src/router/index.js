import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import Login from '@/components/pages/login/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
