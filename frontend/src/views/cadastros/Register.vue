<template>
	<div class="login min-vh-100 d-flex flex-row align-items-center">
		<CContainer>
			<CRow class="justify-content-center">
				<CCol :md="9" :lg="7" :xl="6">
					<CCard class="mx-4">
						<CCardBody class="p-4">
							<CForm @submit.prevent="criarUsuario">
								<h1>Cadastre um Usuário</h1>
								<p class="text-medium-emphasis"></p>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-user" />
									</CInputGroupText>
									<CFormInput
										v-model="usuario.nome"
										placeholder="Nome"
										autocomplete="username"
									/>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>@</CInputGroupText>
									<CFormInput
										v-model="usuario.login"
										placeholder="Login"
										autocomplete="email"
									/>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-lock-locked" />
									</CInputGroupText>
									<CFormInput
										v-model="usuario.senha"
										type="password"
										placeholder="Senha"
										autocomplete="new-password"
									/>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-check-circle" />
									</CInputGroupText>
									<CFormSelect
										v-model="usuario.idPermissaoAcesso"
										aria-label="Default select example"
									>
										<option value="">Perfil</option>
										<option
											v-for="permissao in permissoes"
											:key="permissao.id"
											:value="permissao.id"
										>
											{{ permissao.descricao }}
										</option>
									</CFormSelect>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-power-standby" />
									</CInputGroupText>
									<CFormSelect
										v-model="usuario.ativo"
										aria-label="Default select example"
									>
										<option value="1">Ativo</option>
										<option value="0">Inativo</option>
									</CFormSelect>
								</CInputGroup>
								<div class="btn-login d-grid">
									<CButton type="submit" class="btn-cor"
										>Criar Usuário</CButton
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
	name: 'Register',
	data() {
		return {
			usuario: {
				nome: '',
				login: '',
				senha: '',
				idPermissaoAcesso: null,
				ativo: 1,
			},
			permissoes: [],
		}
	},
	mounted() {
		this.carregarPermissoes()
	},
	methods: {
		async carregarPermissoes() {
			try {
				const response = await axios.get(
					'http://localhost:3000/permissoesAcesso',
				)
				this.permissoes = response.data
			} catch (error) {
				console.error('Erro ao carregar permissões:', error)
			}
		},
		async criarUsuario() {
			if (
				!this.usuario.nome ||
				!this.usuario.login ||
				!this.usuario.senha ||
				!this.usuario.idPermissaoAcesso ||
				this.usuario.ativo === null
			) {
				// Exibir alerta se algum campo estiver vazio
				alert('Preencha todos os campos.')
				return
			}

			this.usuario.ativo = parseInt(this.usuario.ativo)
			try {
				const response = await axios.post(
					'http://localhost:3000/usuarios',
					this.usuario,
				)
				console.log('Usuário criado com sucesso:', response.data)
				// Limpar os campos após o cadastro
				this.usuario = {
					nome: '',
					login: '',
					senha: '',
					idPermissaoAcesso: null,
					ativo: 1, // Resetar para ativo por padrão
				}
				alert('Usuário cadastrado com sucesso!')
			} catch (error) {
				console.error('Erro ao criar usuário:', error)
			}
		},
	},
}
</script>
