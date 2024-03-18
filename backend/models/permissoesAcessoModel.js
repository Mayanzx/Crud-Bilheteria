import db from "../config/database.js";

export const getPermissoesAcesso = (result) => {
    const query = "SELECT * FROM tbPermissaoAcesso";
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getPermissaoAcessoById = (id, result) => {
    const query = "SELECT * FROM tbPermissaoAcesso WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertPermissaoAcesso = (data, result) => {
    const query = "INSERT INTO tbPermissaoAcesso SET ?";
    db.query(query, [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updatePermissaoAcessoById = (data, id, result) => {
    const query = "UPDATE tbPermissaoAcesso SET ? WHERE id = ?";
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deletePermissaoAcessoById = (id, result) => {
    const query = "DELETE FROM tbPermissaoAcesso WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}