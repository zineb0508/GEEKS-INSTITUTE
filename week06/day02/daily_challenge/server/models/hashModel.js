// server/models/hashModel.js
const pool = require('../config/db');  // your pg pool setup

async function createUserWithPassword(userData, hashedPassword) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const insertUserText = `
      INSERT INTO users(email, username, first_name, last_name)
      VALUES($1, $2, $3, $4)
      RETURNING id, email, username, first_name, last_name
    `;
    const insertUserValues = [
      userData.email,
      userData.username,
      userData.first_name,
      userData.last_name,
    ];

    const userResult = await client.query(insertUserText, insertUserValues);
    const newUser = userResult.rows[0];

    const insertHashText = `
      INSERT INTO hashpwd(username, password)
      VALUES($1, $2)
    `;
    await client.query(insertHashText, [userData.username, hashedPassword]);

    await client.query('COMMIT');

    return newUser;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

module.exports = { createUserWithPassword };
