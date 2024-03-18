import db from "../config/database.js";

export const getPermissoes = (result) => {
    const query = "SELECT p.*, u.nome AS usuario_nome, m.descricao AS menu_descricao FROM tbPermissao p INNER JOIN tbUsuario u ON p.idUsuario = u.id INNER JOIN tbMenu m ON p.idMenu = m.id";
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getPermissaoById = (id, result) => {
    const query = "SELECT * FROM tbPermissao WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertPermissao = (data, result) => {
    const query = "INSERT INTO tbPermissao SET ?";
    db.query(query, [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updatePermissaoById = (data, id, result) => {
    const query = "UPDATE tbPermissao SET ? WHERE id = ?";
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deletePermissaoById = (id, result) => {
    const query = "DELETE FROM tbPermissao WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}