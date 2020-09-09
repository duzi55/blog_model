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
import Code from '../pages/stylePages/Code.vue'
import Table from '../pages/stylePages/Table.vue'
import Icon from '../pages/stylePages/Icon.vue'
import Alert from '../pages/UIPages/Alert.vue'
import Badge from '../pages/UIPages/Badge.vue'

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
          path: '/style_typography',
          name: 'typography',
          component: Typography
        },
        {
          path: '/style_code',
          name: 'code',
          component: Code
        },
        {
          path: '/style_table',
          name: 'table',
          component: Table
        },
        {
          path: '/style_icon',
          name: 'icon',
          component: Icon
        },
        {
          path: '/ui_alert',
          name: 'alert',
          component: Alert
        },
        {
          path: '/ui_badge',
          name: 'badge',
          component: Badge
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
