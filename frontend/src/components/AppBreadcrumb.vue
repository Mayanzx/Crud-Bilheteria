<template>
	<div class="poema">
		"Juntos formamos a sinfonia da beleza que ressoa na alma."
	</div>
</template>

<script>
import { onMounted, ref } from 'vue'
import router from '@/router'

export default {
	name: 'AppBreadcrumb',
	setup() {
		const breadcrumbs = ref()

		const getBreadcrumbs = () => {
			return router.currentRoute.value.matched.map((route) => {
				return {
					active: route.path === router.currentRoute.value.fullPath,
					name: route.name,
					path: `${router.options.history.base}${route.path}`,
				}
			})
		}

		router.afterEach(() => {
			breadcrumbs.value = getBreadcrumbs()
		})

		onMounted(() => {
			breadcrumbs.value = getBreadcrumbs()
		})

		return {
			breadcrumbs,
		}
	},
}
</script>
