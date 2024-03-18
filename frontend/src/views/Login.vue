<template>
	<div class="login min-vh-100 d-flex flex-row align-items-center">
		<CContainer>
			<CRow class="justify-content-center">
				<CCol :md="8">
					<CCardGroup>
						<CCard class="p-4">
							<CCardBody>
								<CForm>
									<h1>Login</h1>
									<p class="text-medium-emphasis">
										Entre na sua conta:
									</p>
									<CInputGroup class="mb-3">
										<CInputGroupText>
											<CIcon icon="cil-user" />
										</CInputGroupText>
										<CFormInput
											v-model="loginInput"
											placeholder="Login"
											autocomplete="email"
										/>
									</CInputGroup>
									<CInputGroup class="mb-4">
										<CInputGroupText>
											<CIcon icon="cil-lock-locked" />
										</CInputGroupText>
										<CFormInput
											v-model="passwordInput"
											type="password"
											placeholder="Senha"
											autocomplete="current-password"
										/>
									</CInputGroup>
									<CRow>
										<CCol :xs="6">
											<CButton
												@click="login"
												class="btn-login"
											>
												Entrar
											</CButton>
										</CCol>
										<CCol :xs="6" class="text-right">
											<CButton color="link" class="px-0">
												Esqueci minha senha
											</CButton>
										</CCol>
									</CRow>
								</CForm>
							</CCardBody>
						</CCard>
						<CCard class="login-extra" style="width: 44%">
							<CCardBody class="text-center"></CCardBody>
						</CCard>
					</CCardGroup>
				</CCol>
			</CRow>
		</CContainer>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Login',
	methods: {
		login() {
			if (!this.loginInput || !this.passwordInput) {
				alert('Preencha todos os campos.')
				return
			}
			const loginData = {
				login: this.loginInput,
				senha: this.passwordInput,
			}
			axios
				.post('http://localhost:3000/login', loginData)
				.then((response) => {
					// Lidar com a resposta do backend
					this.$router.push('/dashboard')
					console.log(response.data)
					alert('Login realizado com sucesso')
				})
				.catch((error) => {
					// Lidar com erros
					alert(
						'Login ou senha incorretos, verifique e tente novamente.',
					)
					console.error('Erro ao fazer login:', error)
				})
		},
	},
	data() {
		return {
			loginInput: '',
			passwordInput: '',
		}
	},
}
</script>
