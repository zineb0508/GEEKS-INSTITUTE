// server/config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blogdb',
  password: 'wac193758',
  port: 5432,
});

module.exports = pool;
