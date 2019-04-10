import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store'

import home from './components/home'
import services from './components/services'
import contact from './components/contact'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: "/", component: home},
    {path: "/services", component: services},
    {path: "/contact", component: contact}
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
