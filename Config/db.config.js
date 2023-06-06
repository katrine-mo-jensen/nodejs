import mysql from "mysql";
import dotevn from "dotenv";
dotevn.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

export default db;
