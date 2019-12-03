import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import Contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
