import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),//es6y语法，h为hyperscript的缩写
}).$mount('#app')
