<template>
	<div class="login min-vh-100 d-flex flex-row align-items-center">
		<CContainer>
			<CRow class="justify-content-center">
				<CCol :md="9" :lg="7" :xl="6">
					<CCard class="mx-4">
						<CCardBody class="p-4">
							<CForm>
								<h1>Cadastre um Perfil</h1>
								<p class="text-medium-emphasis"></p>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-user" />
									</CInputGroupText>
									<CFormInput
										v-model="descricao"
										placeholder="Descrição"
									/>
								</CInputGroup>
								<CInputGroup class="mb-3">
									<CInputGroupText>
										<CIcon icon="cil-check-circle" />
									</CInputGroupText>
									<CFormSelect
										v-model="administradorString"
										aria-label="Default select example"
									>
										<option
											v-for="(
												option, index
											) in administradorOptions"
											:key="index"
											:value="option.value"
										>
											{{ option.label }}
										</option>
									</CFormSelect>
								</CInputGroup>
								<div class="btn-login d-grid">
									<CButton
										@click="criarPermissao"
										class="btn-cor"
										>Criar Perfil</CButton
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
	name: 'CadastroPermissoes',
	data() {
		return {
			descricao: '',
			administradorString: '',
			administradorOptions: [
				{ value: '', label: 'Terá acesso administrativo?' },
				{ value: '0', label: 'Não' },
				{ value: '1', label: 'Sim' },
			],
		}
	},
	computed: {
		administrador() {
			// Converte administradorString para número
			return this.administradorString !== null
				? parseInt(this.administradorString)
				: null
		},
	},
	methods: {
		criarPermissao() {
			// Verificar se os campos estão preenchidos
			if (!this.descricao || this.administradorString === '') {
				// Exibir alerta se um dos campos estiver vazio
				alert('Preencha todos os campos.')
				return
			}
			// Dados a serem enviados para o backend
			const data = {
				descricao: this.descricao,
				administrador: this.administrador,
			}
			// Enviar dados para o backend
			axios
				.post('http://localhost:3000/permissoesAcesso', data)
				.then((response) => {
					// Lidar com a resposta do backend
					console.log(response.data)
					// Redirecionar para outra página, se necessário
					this.descricao = ''
					this.administradorString = ''
					alert('Perfil cadastrado com sucesso!')
				})
				.catch((error) => {
					// Lidar com erros
					console.error('Erro ao cadastrar perfil:', error)
				})
		},
	},
}
</script>
