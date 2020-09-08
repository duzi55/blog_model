import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import Dashboard from '../pages/Dashboard.vue'
import NotFound from '../pages/404.vue'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect:'/dashboard',
      children:[
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
        }
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    }
  ]
})
