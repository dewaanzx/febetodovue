import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/views/Landing/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/index.vue')
    },
	{
		path: '/todo',
		name: 'todo',
		component: () => import('@/views/TodoList/index.vue')
	  },
	  {
		path: '/login',
		name: 'login',
		component: () => import('@/views/Login/index.vue')
	  }
  ]
})

export default router
