import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import services from '@/components/services'
import portfolio from '@/components/portfolio'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
