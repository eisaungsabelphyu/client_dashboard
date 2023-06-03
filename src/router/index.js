import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'HomePage',
     component: () => import('../views/HomePage.vue')
  },
  {
    path: '/detail',
    name: 'DetailPage',
    component: () => import('../views/DetailPage.vue')
  },
  {
    path: '/categoryDetail',
    name: 'CategoryDetail',
    component: () => import('../views/CategoryDetail.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
