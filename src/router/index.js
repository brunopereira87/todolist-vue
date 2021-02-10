import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Categories from '../views/Categories/Categories'
import Category from '../views/Categories/Category'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    redirect:'/'
  },
  {
    path: '/categorias',
    name: 'Categories',
    component: Categories
  },{
    path: '/categorias/:id',
    name: 'Category',
    component: Category,
    props: true
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
