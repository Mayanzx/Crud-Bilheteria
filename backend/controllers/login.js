import { getUsuarioByLogin } from '../models/usuariosModel.js';

export const login = (req, res) => {
    const { login, senha } = req.body;

    // Consultar o usuário no banco de dados
    getUsuarioByLogin(login, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        // Verificar se a senha está correta
        if (user.senha !== senha) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        // Usuário autenticado com sucesso
        res.status(200).json({ message: 'Login bem-sucedido', user });
    });
};