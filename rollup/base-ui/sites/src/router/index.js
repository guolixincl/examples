import Vue from 'vue'
import VueRouter from 'vue-router'
import { demoRouters } from '../utils'
import Home from '../views/Home'
import Demo from '../views/Demo'
import Doc from '../views/Doc'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/demo',
    component: Demo,
    children: demoRouters
  }, {
    path: '/doc/:component',
    component: Doc
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
