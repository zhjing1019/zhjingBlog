import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Edit from './views/BlogEdit.vue'
import Home from './views/Home.vue'
import Protal from './views/Protal.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home,
        },
        {
          path: "/protal",
          name: "Protal",
          component: Protal,
        }
      ],
      redirect: "/protal"
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
