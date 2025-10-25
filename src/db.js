// src/db.js
const { Pool } = require("pg");
require("dotenv").config();

// Егер cloud DB қолданса, DATABASE_URL арқылы қосамыз
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" 
       ? { rejectUnauthorized: false } 
       : false
});

pool.on("error", (err) => {
  console.error("Unexpected PG error", err);
  process.exit(-1);
});

module.exports = pool;
