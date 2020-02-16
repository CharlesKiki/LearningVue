// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/* 1. TestTemplate,组件需要引入 */
import App from './App.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  // 2. 进入组件生命周期，使用该组件标签
  template: '<App/>'
})
