import mysql from "mysql2";
  
// Conexão com o BD
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '281203',
  database: 'dbosespbilheteria'
});
 
export default db;