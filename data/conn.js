const mysql = require('mysql');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.log("Erro ao conectar o banco de dados:" + err);
  } else {
    console.log("Sucesso! Conexão com banco de dados bem-sucedida!");
  }
});

module.exports = db;
