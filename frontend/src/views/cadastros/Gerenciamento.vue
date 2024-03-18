<template>
	<div class="login min-vh-100 d-flex flex-row align-items-center">
		<CContainer>
			<CRow class="justify-content-center">
				<CCol :md="9" :lg="7" :xl="12">
					<CCard class="mx-4">
						<CCardBody class="p-4">
							<h1>Gerencie os Registros</h1>
							<p>Obs: Delete apenas dados não relacionados</p>
							<br />
							<CAccordion>
								<CAccordionItem :item-key="1">
									<CAccordionHeader class="accordionHeader">
										Perfis
									</CAccordionHeader>
									<CAccordionBody>
										<CTable>
											<CTableHead>
												<CTableRow class="table-row">
													<CTableHeaderCell
														scope="col"
														>#</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Descrição</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Acesso</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Funções</CTableHeaderCell
													>
												</CTableRow>
											</CTableHead>
											<CTableBody>
												<CTableRow
													class="table-row"
													v-for="permissao in permissoes"
													:key="permissao.id"
												>
													<CTableHeaderCell
														scope="row"
														>{{
															permissao.id
														}}</CTableHeaderCell
													>
													<CTableDataCell>{{
														permissao.descricao
													}}</CTableDataCell>
													<CTableDataCell>{{
														permissao.administrador
															.data[0] === 1
															? 'Administrativo'
															: 'Limitado'
													}}</CTableDataCell>
													<CTableDataCell>
														<CButton
															class="btn-delete"
															color="danger"
															@click="
																deletePermissao(
																	permissao.id,
																)
															"
														>
															Deletar
														</CButton>
														<CButton
															class="btn-att"
															color="primary"
															@click="
																editarPermissao(
																	permissao.id,
																)
															"
														>
															Editar
														</CButton>
													</CTableDataCell>
												</CTableRow>
											</CTableBody>
										</CTable>
									</CAccordionBody>
								</CAccordionItem>
								<CAccordionItem :item-key="2">
									<CAccordionHeader>
										Usuários
									</CAccordionHeader>
									<CAccordionBody>
										<CTable>
											<CTableHead>
												<CTableRow>
													<CTableHeaderCell
														scope="col"
														>#</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Nome</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Login</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Senha</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Perfil</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Status</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Funções</CTableHeaderCell
													>
												</CTableRow>
											</CTableHead>
											<CTableBody>
												<CTableRow
													v-for="usuario in usuarios"
													:key="usuario.id"
												>
													<CTableHeaderCell
														scope="row"
														>{{
															usuario.id
														}}</CTableHeaderCell
													>
													<CTableDataCell>{{
														usuario.nome
													}}</CTableDataCell>
													<CTableDataCell>{{
														usuario.login
													}}</CTableDataCell>
													<CTableDataCell>{{
														usuario.senha
													}}</CTableDataCell>
													<CTableDataCell>{{
														usuario.permissao_descricao
													}}</CTableDataCell>
													<CTableDataCell>{{
														usuario.ativo
															.data[0] === 1
															? 'Ativo'
															: 'Inativo'
													}}</CTableDataCell>
													<CTableDataCell>
														<CButton
															class="btn-delete"
															color="danger"
															@click="
																deleteUsuario(
																	usuario.id,
																)
															"
														>
															Deletar
														</CButton>
														<CButton
															class="btn-att"
															color="primary"
															@click="
																editarUsuario(
																	usuario.id,
																)
															"
														>
															Editar
														</CButton>
													</CTableDataCell>
												</CTableRow>
											</CTableBody>
										</CTable>
									</CAccordionBody>
								</CAccordionItem>
								<CAccordionItem :item-key="3">
									<CAccordionHeader>Menus</CAccordionHeader>
									<CAccordionBody>
										<CTable>
											<CTableHead>
												<CTableRow>
													<CTableHeaderCell
														scope="col"
														>#</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Descrição</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>link</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>ID
														Pai</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Ordem</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Status</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Funções</CTableHeaderCell
													>
												</CTableRow>
											</CTableHead>
											<CTableBody>
												<CTableRow
													v-for="menu in menus"
													:key="menu.id"
												>
													<CTableHeaderCell
														scope="row"
														>{{
															menu.id
														}}</CTableHeaderCell
													>
													<CTableDataCell>{{
														menu.descricao
													}}</CTableDataCell>
													<CTableDataCell>{{
														menu.link || 'N/A'
													}}</CTableDataCell>
													<CTableDataCell>{{
														menu.idPai || 'N/A'
													}}</CTableDataCell>
													<CTableDataCell>{{
														menu.ordem
													}}</CTableDataCell>
													<CTableDataCell>{{
														menu.ativo.data[0] === 1
															? 'Ativo'
															: 'Inativo'
													}}</CTableDataCell>
													<CTableDataCell>
														<CButton
															class="btn-delete"
															color="danger"
															@click="
																deleteMenu(
																	menu.id,
																)
															"
														>
															Deletar
														</CButton>
														<CButton
															class="btn-att"
															color="primary"
															@click="
																editarMenu(
																	menu.id,
																)
															"
														>
															Editar
														</CButton>
													</CTableDataCell>
												</CTableRow>
											</CTableBody>
										</CTable>
									</CAccordionBody>
								</CAccordionItem>
								<CAccordionItem :item-key="4">
									<CAccordionHeader>
										Relações
									</CAccordionHeader>
									<CAccordionBody>
										<CTable>
											<CTableHead>
												<CTableRow>
													<CTableHeaderCell
														scope="col"
														>#</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Usuário</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Menu</CTableHeaderCell
													>
													<CTableHeaderCell
														scope="col"
														>Funções</CTableHeaderCell
													>
												</CTableRow>
											</CTableHead>
											<CTableBody>
												<CTableRow
													v-for="relacao in relacoes"
													:key="relacao.id"
												>
													<CTableHeaderCell
														scope="row"
														>{{
															relacao.id
														}}</CTableHeaderCell
													>
													<CTableDataCell>{{
														relacao.usuario_nome
													}}</CTableDataCell>
													<CTableDataCell>{{
														relacao.menu_descricao
													}}</CTableDataCell>
													<CTableDataCell>
														<CButton
															class="btn-delete"
															color="danger"
															@click="
																deleteRelacao(
																	relacao.id,
																)
															"
														>
															Deletar
														</CButton>
														<CButton
															class="btn-att"
															color="primary"
															@click="
																editarRelacao(
																	relacao.id,
																)
															"
														>
															Editar
														</CButton>
													</CTableDataCell>
												</CTableRow>
											</CTableBody>
										</CTable>
									</CAccordionBody>
								</CAccordionItem>
							</CAccordion>
							<br />
							<CNavLink href="#/dashboard">
								<CIcon class="mx-2" icon="cil-home" size="xl" />
							</CNavLink>
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
	name: 'Gerenciamento',
	data() {
		return {
			permissoes: [],
			usuarios: [],
			menus: [],
			relacoes: [],
		}
	},
	mounted() {
		this.getPermissoes()
		this.getUsuarios()
		this.getMenus()
		this.getRelacoes()
	},
	methods: {
		getPermissoes() {
			axios
				.get('http://localhost:3000/permissoesAcesso')
				.then((response) => {
					this.permissoes = response.data
				})
				.catch((error) => {
					console.error('Erro ao buscar permissões de acesso:', error)
				})
		},
		getUsuarios() {
			axios
				.get('http://localhost:3000/usuarios')
				.then((response) => {
					this.usuarios = response.data
				})
				.catch((error) => {
					console.error('Erro ao buscar usuários:', error)
				})
		},
		getMenus() {
			axios
				.get('http://localhost:3000/menus')
				.then((response) => {
					this.menus = response.data
				})
				.catch((error) => {
					console.error('Erro ao buscar menus:', error)
				})
		},
		getRelacoes() {
			axios
				.get('http://localhost:3000/permissoes')
				.then((response) => {
					this.relacoes = response.data
				})
				.catch((error) => {
					console.error('Erro ao buscar relações:', error)
				})
		},
		async deletePermissao(id) {
			var excluir = confirm(`Deseja deletar essa permissão? id: ${id}`)
			if (excluir) {
				try {
					await axios.delete(
						`http://localhost:3000/permissoesAcesso/${id}`,
					)
					this.getPermissoes()
				} catch (err) {
					console.log(err)
				}
			}
		},
		// Função para excluir um usuário
		async deleteUsuario(id) {
			var excluir = confirm(`Deseja deletar este usuário? id: ${id}`)
			if (excluir) {
				try {
					await axios.delete(`http://localhost:3000/usuarios/${id}`)
					this.getUsuarios()
				} catch (err) {
					console.log(err)
				}
			}
		},
		// Função para excluir um menu
		async deleteMenu(id) {
			var excluir = confirm(`Deseja deletar este menu? id: ${id}`)
			if (excluir) {
				try {
					await axios.delete(`http://localhost:3000/menus/${id}`)
					this.getMenus()
				} catch (err) {
					console.log(err)
				}
			}
		},
		// Função para excluir uma relação
		async deleteRelacao(id) {
			var excluir = confirm(`Deseja deletar essa relação? id: ${id}`)
			if (excluir) {
				try {
					await axios.delete(`http://localhost:3000/permissoes/${id}`)
					this.getRelacoes()
				} catch (err) {
					console.log(err)
				}
			}
		},
		async editarPermissao(id) {
			const response = await axios.get(
				`http://localhost:3000/permissoesAcesso/${id}`,
			)
			const permissaoAtual = response.data
			const novoDescricao = prompt(
				`Insira a nova descrição (atual: ${permissaoAtual.descricao}):`,
			)
			const novoAcessoString = prompt(
				'Insira o novo acesso (Escolha pelo ID): \n 1 - Administrativo \n 0 - Limitado',
			)
			const novoAcesso = parseInt(novoAcessoString)
			if (novoDescricao && !isNaN(novoAcesso)) {
				const confirmar = confirm(
					`Deseja atualizar essa permissão? id: ${id}`,
				)
				if (confirmar) {
					try {
						await axios.put(
							`http://localhost:3000/permissoesAcesso/${id}`,
							{
								descricao: novoDescricao,
								administrador: novoAcesso,
							},
						)
						this.getUsuarios()
						this.getPermissoes()
					} catch (err) {
						console.log(err)
					}
				}
			} else {
				alert('Por favor, preencha todos os campos.')
			}
		},
		async editarUsuario(id) {
			try {
				const response = await axios.get(
					`http://localhost:3000/usuarios/${id}`,
				)
				const usuarioAtual = response.data

				const responsePerfis = await axios.get(
					'http://localhost:3000/permissoesAcesso',
				)
				const perfis = responsePerfis.data

				// Gere uma lista de opções para os IDs dos perfis existentes
				const opcoesPerfis = perfis.map((perfis) => ({
					value: perfis.id,
					label: `${perfis.id} - ${perfis.descricao}`,
				}))
				const novoNome = prompt(
					`Insira o novo nome (atual: ${usuarioAtual.nome}):`,
				)
				const novoLogin = prompt(
					`Insira o novo login (atual: ${usuarioAtual.login}):`,
				)
				const novaSenha = prompt(
					`Insira a nova senha (atual: ${usuarioAtual.senha}):`,
				)
				const novoPerfilString = prompt(
					`Selecione o novo perfil (Escolha pelo ID):\n ${opcoesPerfis.map((opcao) => opcao.label).join('\n')}`,
				)
				const novoPerfil = parseInt(novoPerfilString)
				const novoAtivoString = prompt(
					'Insira o novo status (Escolha pelo ID): \n 1 - Ativo \n 0 - Inativo',
				)
				const novoAtivo = parseInt(novoAtivoString)
				if (
					novoNome &&
					novoLogin &&
					novaSenha &&
					novoPerfil &&
					novoAtivo !== null
				) {
					const confirmar = confirm(
						`Deseja atualizar esse usuário? id: ${id}`,
					)
					if (confirmar) {
						try {
							await axios.put(
								`http://localhost:3000/usuarios/${id}`,
								{
									nome: novoNome,
									login: novoLogin,
									senha: novaSenha,
									idPermissaoAcesso: novoPerfil,
									ativo: novoAtivo,
								},
							)
							this.getRelacoes()
							this.getUsuarios()
						} catch (err) {
							console.log(err)
						}
					}
				} else {
					alert('Por favor, preencha todos os campos.')
				}
			} catch (err) {
				console.log(err)
			}
		},
		async editarMenu(id) {
			try {
				const response = await axios.get(
					`http://localhost:3000/menus/${id}`,
				)
				const menuAtual = response.data

				const novaDescricao = prompt(
					`Insira a nova descrição (atual: ${menuAtual.descricao}):`,
				)
				const novoLink = prompt(
					`Insira o novo link (atual: ${menuAtual.link}):`,
				)
				let novaIdPai = prompt(
					`Insira a nova ID Pai (atual: ${menuAtual.idPai}):`,
				)
				const novaOrdem = prompt(
					`Insira a nova ordem (atual: ${menuAtual.ordem}):`,
				)
				const novoAtivoString = prompt(
					'Insira o novo status (Escolha pelo ID): \n 1 - Ativo \n 0 - Inativo',
				)
				const novoAtivo = parseInt(novoAtivoString)

				if (novaIdPai === '') {
					novaIdPai = null
				}

				if (novaDescricao && novaOrdem !== null && novoAtivo !== null) {
					const confirmar = confirm(
						`Deseja atualizar esse menu? id: ${id}`,
					)
					if (confirmar) {
						try {
							await axios.put(
								`http://localhost:3000/menus/${id}`,
								{
									descricao: novaDescricao,
									link: novoLink,
									idPai: novaIdPai,
									ordem: novaOrdem,
									ativo: novoAtivo,
								},
							)
							this.getMenus()
						} catch (err) {
							console.log(err)
						}
					}
				} else {
					alert('Por favor, preencha todos os campos.')
				}
			} catch (err) {
				console.log(err)
			}
		},
		async editarRelacao(id) {
			try {
				const responseUsuarios = await axios.get(
					'http://localhost:3000/usuarios',
				)
				const usuarios = responseUsuarios.data

				const responseMenus = await axios.get(
					'http://localhost:3000/menus',
				)
				const menus = responseMenus.data

				// Gere uma lista de opções para os IDs dos usuários existentes
				const opcoesUsuarios = usuarios.map((usuario) => ({
					value: usuario.id,
					label: `${usuario.id} - ${usuario.nome}`,
				}))

				// Gere uma lista de opções para os IDs dos menus existentes
				const opcoesMenus = menus.map((menu) => ({
					value: menu.id,
					label: `${menu.id} - ${menu.descricao}`,
				}))

				const novoUsuarioString = prompt(
					`Selecione o novo usuário (Escolha pelo ID):\n ${opcoesUsuarios.map((opcao) => opcao.label).join('\n')}`,
				)
				const novoUsuario = parseInt(novoUsuarioString)
				const novoMenuString = prompt(
					`Selecione o novo menu (Escolha pelo ID):\n ${opcoesMenus.map((opcao) => opcao.label).join('\n')}`,
				)
				const novoMenu = parseInt(novoMenuString)

				if (novoUsuario && novoMenu) {
					const confirmar = confirm(
						`Deseja atualizar essa relação? id: ${id}`,
					)
					if (confirmar) {
						try {
							await axios.put(
								`http://localhost:3000/permissoes/${id}`,
								{
									idUsuario: novoUsuario,
									idMenu: novoMenu,
								},
							)
							this.getRelacoes()
						} catch (err) {
							console.log(err)
						}
					}
				} else {
					alert('Por favor, preencha todos os campos.')
				}
			} catch (err) {
				console.log(err)
			}
		},
	},
}
</script>
