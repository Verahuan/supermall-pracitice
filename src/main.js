import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index'

import toast from '@/components/common/toast/index'

//减少生产环境下的警告语
Vue.config.productionTip = false

//添加时间总线对象
Vue.prototype.$bus = new Vue()

//注册toast插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
//Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el选项指定的挂载元素中提取出的 HTML 模板编译渲染函数