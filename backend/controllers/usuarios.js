import { getUsuarios, getUsuarioById, insertUsuario, updateUsuarioById, deleteUsuarioById } from '../models/usuariosModel.js';

export const showUsuarios = (req, res) => {
    getUsuarios((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const showUsuarioById = (req, res) => {
    getUsuarioById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const createUsuario = (req, res) => {
    const data = req.body;
    insertUsuario(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updateUsuario = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateUsuarioById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deleteUsuario = (req, res) => {
    const id = req.params.id;
    deleteUsuarioById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}