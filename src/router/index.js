import Vue from 'vue'
import Router from 'vue-router'
import login from "../page/login.vue"
import index from "../page/index.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/login'}, 
    {path: '/login',name: 'login', component: login},
    {path: '/index',name: 'index', component: index}
  ]
})
