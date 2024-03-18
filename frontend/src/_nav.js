export default [
	{
		component: 'CNavItem',
		name: 'Home',
		to: '/dashboard',
		icon: 'cil-home',
	},
	{
		component: 'CNavTitle',
		name: 'Cadastros',
	},
	{
		component: 'CNavItem',
		name: 'Perfis',
		to: '/pages/cadastropermissoes',
		icon: 'cil-check-circle',
	},
	{
		component: 'CNavItem',
		name: 'Usuários',
		to: '/pages/register',
		icon: 'cil-user',
	},
	{
		component: 'CNavItem',
		name: 'Menus',
		to: '/pages/cadastromenu',
		icon: 'cil-library',
	},
	{
		component: 'CNavItem',
		name: 'Relações',
		to: '/pages/cadastrorelacoes',
		icon: 'cil-loop-circular',
	},
	{
		component: 'CNavTitle',
		name: 'Registros',
	},
	{
		component: 'CNavItem',
		name: 'Gerenciamento',
		to: '/pages/gerenciamento',
		icon: 'cil-storage',
	},

	// {
	//   component: 'CNavItem',
	//   name: 'Download CoreUI',
	//   href: 'http://coreui.io/vue/',
	//   icon: { name: 'cil-cloud-download', class: 'text-white' },
	//   _class: 'bg-success text-white',
	//   target: '_blank'
	// },
	// {
	//   component: 'CNavItem',
	//   name: 'Try CoreUI PRO',
	//   href: 'http://coreui.io/pro/vue/',
	//   icon: { name: 'cil-layers', class: 'text-white' },
	//   _class: 'bg-danger text-white',
	//   target: '_blank'
	// }
]
