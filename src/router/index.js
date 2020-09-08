import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import Dashboard from '../pages/Dashboard.vue'
import NotFound from '../pages/404.vue'
import Profile from '../pages/Profile.vue'
import MailBox from '../pages/MailBox.vue'
import Todo from '../pages/Todo.vue'
import FileManager from '../pages/FileManager.vue'
import Typography from '../pages/stylePages/Typography.vue'

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
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
        },
        ,
        {
          path: '/mailBox',
          name: 'mailBox',
          component: MailBox,
        },
        {
          path: '/todo',
          name: 'todo',
          component: Todo,
        },
        {
          path: '/fileManager',
          name: 'fileManager',
          component: FileManager,
        },
        {
          path: '/style/typography',
          name: 'typography',
          component: Typography
        },
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    }
  ]
})
