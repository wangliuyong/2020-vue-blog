// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'
import transformTime from './helps/tansformTime'
import Antd from 'ant-design-vue'
import ElementUI from 'element-ui'

import router from './router'

import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Antd)
Vue.use(ElementUI)
Vue.use(transformTime);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
