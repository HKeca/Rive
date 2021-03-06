import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Home from '@/components/Home'
import About from '@/components/About'
import EditUser from '@/components/EditUser'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/edit',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
