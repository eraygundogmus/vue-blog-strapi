import { createRouter, createWebHashHistory } from 'vue-router'

const Home = import('@/views/Home.vue')
const Blog = import('@/views/Blog.vue')

const routes: Array<any> = [
  {
    path: '',
    name: 'Home',
    component: () => Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => Blog,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
