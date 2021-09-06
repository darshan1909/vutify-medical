import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Gallery from '../views/Gallery.vue'
// import Ludo from '../views/Ludo.vue'
// import Ludo1 from '../views/Ludo1.vue'
// import Keyboard from '../views/Keyboard'
import Dukaan from '../views/Dukaan'
// import LoginModernApp from '../views/LoginModernApp'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name:'Dukaan',
    component:Dukaan
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router