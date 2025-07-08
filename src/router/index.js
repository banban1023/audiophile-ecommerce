import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home/index.vue'),
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue')
      },
      {
        path: '/headphones',
        name: 'headphones',
        component: () => import('../views/home/headphones.vue')
      },
      {
        path: '/speakers',
        name: 'speakers',
        component: () => import('../views/home/speakers.vue')
      },
      {
        path: '/earphones',
        name: 'earphones',
        component: () => import('../views/home/earphones.vue')
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/detail.vue')
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
  // 平滑滚动：
  // window.scrollTo({ top: 0, behavior: 'smooth' })
})

export default router
