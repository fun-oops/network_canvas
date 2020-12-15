// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import dashboard from './dashboard'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },//声明有哪个组件
  template: '<App/>'//使用哪个组件
})
// new Vue({
//   el: '#app',
//   router:router,
//   components: { dashboard },//声明有哪个组件
//   template: '<dashboard percent="45"></dashboard>  '//使用哪个组件
// })