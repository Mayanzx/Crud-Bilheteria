<template>
	<CHeader position="sticky" class="mb-4">
		<CContainer fluid>
			<CHeaderToggler
				class="ps-1"
				@click="$store.commit('toggleSidebar')"
			>
				<CIcon class="btn-icon" icon="cil-menu" size="lg" />
			</CHeaderToggler>
			<CHeaderNav>
				<CNavItem>
					<CNavLink href="#">
						<CIcon
							class="btn-icon"
							icon="cil-account-logout"
							size="lg"
						/>
					</CNavLink>
				</CNavItem>
			</CHeaderNav>
		</CContainer>
		<CHeaderDivider />
		<CContainer fluid>
			<AppBreadcrumb />
		</CContainer>
	</CHeader>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb'
import { logo } from '@/assets/brand/logo'
export default {
	name: 'AppHeader',
	components: {
		AppBreadcrumb,
	},
	setup() {
		return {
			logo,
		}
	},
}
</script>
