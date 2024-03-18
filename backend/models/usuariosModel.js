import db from "../config/database.js";

export const getUsuarios = (result) => {
    const query = "SELECT u.*, pa.descricao AS permissao_descricao FROM tbUsuario u JOIN tbPermissaoAcesso pa ON u.idPermissaoAcesso = pa.id";;
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getUsuarioById = (id, result) => {
    const query = "SELECT * FROM tbUsuario WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertUsuario = (data, result) => {
    const query = "INSERT INTO tbUsuario SET ?";
    db.query(query, [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateUsuarioById = (data, id, result) => {
    const query = "UPDATE tbUsuario SET ? WHERE id = ?";
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteUsuarioById = (id, result) => {
    const query = "DELETE FROM tbUsuario WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getUsuarioByLogin = (login, callback) => {
    const query = "SELECT * FROM tbUsuario WHERE login = ?";
    db.query(query, [login], (err, results) => {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results[0]);
        }
    });
}