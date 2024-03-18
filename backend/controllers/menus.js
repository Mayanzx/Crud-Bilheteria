import { getMenus, getMenuById, insertMenu, updateMenuById, deleteMenuById } from '../models/menusModel.js';

export const showMenus = (req, res) => {
    getMenus((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const showMenuById = (req, res) => {
    getMenuById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const createMenu = (req, res) => {
    const data = req.body;
    insertMenu(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updateMenu = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateMenuById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deleteMenu = (req, res) => {
    const id = req.params.id;
    deleteMenuById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}