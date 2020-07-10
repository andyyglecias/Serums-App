import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bio from '../views/Bio.vue'
import FaceSerum from '../views/FaceSerum.vue'
import HairSerum from '../views/HairSerum.vue'




Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bio',
    name: 'Bio',
    component: Bio
  },
  {
    path: '/faceserum',
    name: 'FaceSerum',
    component: FaceSerum
  },
  {
    path: '/hairserum',
    name: 'HairSerum',
    component: HairSerum
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
