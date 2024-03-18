import { getPermissoesAcesso, getPermissaoAcessoById, insertPermissaoAcesso, updatePermissaoAcessoById, deletePermissaoAcessoById } from '../models/permissoesAcessoModel.js';

export const showPermissoesAcesso = (req, res) => {
    getPermissoesAcesso((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const showPermissaoAcessoById = (req, res) => {
    getPermissaoAcessoById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const createPermissaoAcesso = (req, res) => {
    const data = req.body;
    insertPermissaoAcesso(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updatePermissaoAcesso = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updatePermissaoAcessoById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deletePermissaoAcesso = (req, res) => {
    const id = req.params.id;
    deletePermissaoAcessoById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}