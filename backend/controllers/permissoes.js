import { getPermissoes, getPermissaoById, insertPermissao, updatePermissaoById, deletePermissaoById } from '../models/permissoesModel.js';

export const showPermissoes = (req, res) => {
    getPermissoes((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const showPermissaoById = (req, res) => {
    getPermissaoById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const createPermissao = (req, res) => {
    const data = req.body;
    insertPermissao(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updatePermissao = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updatePermissaoById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deletePermissao = (req, res) => {
    const id = req.params.id;
    deletePermissaoById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}