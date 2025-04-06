// db.js

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // default MySQL username
  password: "", // MySQL password
  database: "products_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;
