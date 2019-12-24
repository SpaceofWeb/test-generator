import Vue from 'vue'
import VueRouter from 'vue-router'
import Tests from '../views/Tests.vue'
import View from '../views/View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tests',
    component: Tests
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('../views/View.vue')
  },
  {
    path: '/create',
    name: 'CreateTest',
    component: () => import('../views/CreateTest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
