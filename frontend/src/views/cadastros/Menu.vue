<template>
	<div class="login min-vh-100 d-flex flex-row align-items-center">
		<CContainer>
			<CRow class="justify-content-center">
				<CCol :md="9" :lg="7" :xl="6">
					<CCard class="mx-4">
						<CCardBody class="p-4">
							<CForm @submit.prevent="criarMenu">
								<h1>Cadastre um Menu</h1>
								<p class="text-medium-emphasis"></p>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-user" />
									</CInputGroupText>
									<CFormInput
										v-model="menu.descricao"
										placeholder="Descrição"
									/>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-link" />
									</CInputGroupText>
									<CFormInput
										v-model="menu.link"
										placeholder="Link"
									/>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-asterisk" />
									</CInputGroupText>
									<CFormSelect
										v-model="menuSelecionado"
										aria-label="IdPai"
										@change="enviarIdMenu"
									>
										<option value="">Novo idPai</option>
										<option
											v-for="menu in menus"
											:key="menu.id"
											:value="menu.id"
										>
											{{ menu.descricao }}
										</option>
									</CFormSelect>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-list" />
									</CInputGroupText>
									<CFormInput
										v-model="menu.ordem"
										placeholder="Ordem"
									/>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-power-standby" />
									</CInputGroupText>
									<CFormSelect
										v-model="menu.ativo"
										aria-label="Ativo"
									>
										<option value="1">Ativo</option>
										<option value="0">Inativo</option>
									</CFormSelect>
								</CInputGroup>
								<div class="btn-login d-grid">
									<CButton type="submit" class="btn-cor"
										>Criar Menu</CButton
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
	name: 'CadastroMenu',
	data() {
		return {
			menu: {
				descricao: '',
				link: '',
				idPai: null,
				ordem: '',
				ativo: 1,
			},
			menus: [],
			menuSelecionado: null,
		}
	},
	mounted() {
		this.getMenus()
	},
	methods: {
		async criarMenu() {
			// Verifica se algum campo está vazio
			if (!this.menu.descricao || !this.menu.ordem || !this.menu.ativo) {
				alert('Preencha todos os campos.')
				return
			}
			try {
				if (
					this.menuSelecionado !== null &&
					this.menuSelecionado.trim()
				) {
					this.menu.idPai = this.menuSelecionado
				} else {
					this.menu.idPai = null
				}
				const response = await axios.post(
					'http://localhost:3000/menus',
					this.menu,
				)
				console.log('Menu criado com sucesso:', response.data)

				// Limpar os campos após o cadastro
				this.menu = {
					descricao: '',
					link: '',
					idPai: '',
					ordem: '',
					ativo: 1,
				}

				alert('Menu cadastrado com sucesso!')
			} catch (error) {
				console.error('Erro ao criar menu:', error)
			}
		},
		async getMenus() {
			try {
				const response = await axios.get('http://localhost:3000/menus')
				// Filtra os menus onde idPai é null
				this.menus = response.data.filter(
					(menuItem) => menuItem.idPai === null,
				)
			} catch (error) {
				console.error('Erro ao buscar menus:', error)
			}
		},
		enviarIdMenu() {
			console.log('ID do menu selecionado:', this.menuSelecionado)
			// Aqui você pode enviar o ID do menu selecionado para onde for necessário
		},
	},
}
</script>
