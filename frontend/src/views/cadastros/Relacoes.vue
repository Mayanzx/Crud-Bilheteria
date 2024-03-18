<template>
	<div class="login min-vh-100 d-flex flex-row align-items-center">
		<CContainer>
			<CRow class="justify-content-center">
				<CCol :md="9" :lg="7" :xl="6">
					<CCard class="mx-4">
						<CCardBody class="p-4">
							<CForm @submit.prevent="criarRelacao">
								<h1>Cadastre uma Relação</h1>
								<p class="text-medium-emphasis"></p>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-user" />
									</CInputGroupText>
									<CFormSelect
										v-model="relacao.idUsuario"
										aria-label="Usuário"
									>
										<option value="">
											Selecione um Usuário
										</option>
										<option
											v-for="usuario in usuarios"
											:key="usuario.id"
											:value="usuario.id"
										>
											{{ usuario.nome }}
										</option>
									</CFormSelect>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-library" />
									</CInputGroupText>
									<CFormSelect
										v-model="relacao.idMenu"
										aria-label="Menus de Acesso"
									>
										<option value="">
											Selecione um Menu
										</option>
										<option
											v-for="menu in menus"
											:key="menu.id"
											:value="menu.id"
										>
											{{ menu.descricao }}
										</option>
									</CFormSelect>
								</CInputGroup>
								<div class="btn-login d-grid">
									<CButton type="submit" class="btn-cor"
										>Criar Relação</CButton
									>
								</div>
								<br />
								<CNavLink href="#/dashboard">
									<CIcon
										class="mx-2"
										icon="cil-home"
										size="xl"
									/>
								</CNavLink>
							</CForm>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</CContainer>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'CadastroRelacoes',
	data() {
		return {
			relacao: {
				idUsuario: null,
				idMenu: null,
			},
			usuarios: [],
			menus: [],
		}
	},
	mounted() {
		this.carregarUsuarios()
		this.carregarMenus()
	},
	methods: {
		async criarRelacao() {
			if (!this.relacao.idUsuario || !this.relacao.idMenu) {
				alert('Por favor, preencha todos os campos')
				return
			}
			try {
				const response = await axios.post(
					'http://localhost:3000/permissoes',
					this.relacao,
				)
				console.log('Relação criada com sucesso:', response.data)

				// Limpar os campos após o cadastro
				this.relacao.idUsuario = null
				this.relacao.idMenu = null

				alert('Relação cadastrada com sucesso!')
			} catch (error) {
				console.error('Erro ao criar relação:', error)
			}
		},
		async carregarUsuarios() {
			try {
				const response = await axios.get(
					'http://localhost:3000/usuarios',
				)
				this.usuarios = response.data
			} catch (error) {
				console.error('Erro ao carregar usuários:', error)
			}
		},
		async carregarMenus() {
			try {
				const response = await axios.get('http://localhost:3000/menus')
				this.menus = response.data
			} catch (error) {
				console.error('Erro ao carregar menus:', error)
			}
		},
	},
}
</script>
