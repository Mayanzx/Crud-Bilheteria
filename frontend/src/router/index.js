import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import('@/views/Login'),
	},
	{
		path: '/pages',
		redirect: '/pages/404',
		name: 'Pages',
		component: {
			render() {
				return h(resolveComponent('router-view'))
			},
		},
		children: [
			{
				path: 'home',
				name: 'Home',
				component: DefaultLayout,
				redirect: '/dashboard',
				children: [
					{
						path: '/dashboard',
						name: 'Dashboard',
						// route level code-splitting
						// this generates a separate chunk (about.[hash].js) for this route
						// which is lazy-loaded when the route is visited.
						component: () =>
							import(
								/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'
							),
					},
				],
			},
			{
				path: 'cadastropermissoes',
				name: 'CadastroPermissoes',
				component: () => import('@/views/cadastros/Permissoes'),
			},
			{
				path: 'register',
				name: 'Register',
				component: () => import('@/views/cadastros/Register'),
			},
			{
				path: 'cadastromenu',
				name: 'CadastroMenu',
				component: () => import('@/views/cadastros/Menu'),
			},
			{
				path: 'cadastrorelacoes',
				name: 'CadastroRelacoes',
				component: () => import('@/views/cadastros/Relacoes'),
			},
			{
				path: 'gerenciamento',
				name: 'Gerenciamento',
				component: () => import('@/views/cadastros/Gerenciamento'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		// always scroll to top
		return { top: 0 }
	},
})

export default router
