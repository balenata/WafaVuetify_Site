import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/audience/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/audience/AboutUs.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../components/audience/Blog.vue')
  },
  {
    path: '/ebook',
    name: 'Ebook',
    component: () => import('../components/audience/Ebook.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/audience/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/admin/AdminApp.vue'),
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem('loggedIN')) === false) {
        next({ name: 'Home' })
      } else {
        next()
      }
    },
    children: [
      {
        path: 'admin-blog',
        name: 'adminBlog',
        component: () => import('../components/admin/AdminBlog.vue')

      },
      {
        path: 'admin-quote',
        name: 'adminQuote',
        component: () => import('../components/admin/quote/AdminQuote.vue')

      },
      {
        path: 'admin-discount',
        name: 'adminDiscount',
        component: () => import('../components/admin/discount/AdminDiscount.vue')

      },
      {
        path: 'admin-slideshow',
        name: 'adminSlideShow',
        component: () => import('../components/admin/slideshow/AdminSlideShow.vue')

      }
    ]
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: routes,
  mode: 'history'
})

export default router
