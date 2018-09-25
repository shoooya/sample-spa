import Vue from 'vue'
import Router from 'vue-router'
import Hallow from '@/components/Hallow'
import World from '@/components/World'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hallow',
      component: Hallow
    },
    {
      path: '/world',
      name: 'World',
      component: World
    }
  ]
})
