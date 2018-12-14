// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import { Button, Select } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
import 'normalize.css'
Vue.config.productionTip = false
// 路由全局守卫
router.beforeEach((to, from, next) => {
  // 根据本地有没有token去判断用户登录了没有
  let token  = localStorage.getItem("itcast")
  if(!token && to.path!=="/login"){
    // 如果没有token 直接结束掉 并跳转到登录页
    next({path:'/login'})
    return
  }
  if(token &&  to.path =="/login"){
    next({path:'/index'})
    return
  }
// 一定要调用next方法 
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
