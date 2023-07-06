const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      password: 'sAng!1603',
      database: 'role_db'
    },
    console.log(`Connected to the role_db database.`)
    );
   
// db.connect()
module.exports = db;