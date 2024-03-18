import db from "../config/database.js";

export const getMenus = (result) => {
    const query = "SELECT * FROM tbMenu";
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getMenuById = (id, result) => {
    const query = "SELECT * FROM tbMenu WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertMenu = (data, result) => {
    const query = "INSERT INTO tbMenu SET ?";
    db.query(query, [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateMenuById = (data, id, result) => {
    const query = "UPDATE tbMenu SET ? WHERE id = ?";
    db.query(query, [data, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteMenuById = (id, result) => {
    const query = "DELETE FROM tbMenu WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}