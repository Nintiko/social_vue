import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/user/:id',
    component: User
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
