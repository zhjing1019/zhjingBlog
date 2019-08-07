import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Edit from './views/BlogEdit.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
