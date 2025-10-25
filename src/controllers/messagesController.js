const pool = require("../db");
const { validationResult } = require("express-validator");

async function createMessage(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    const result = await pool.query(
      `INSERT INTO messages (name, email, message)
       VALUES ($1, $2, $3) RETURNING *`,
      [name, email, message]
    );

    res.status(201).json({ data: result.rows[0] });
  } catch (err) {
    next(err);
  }
}

async function listMessages(req, res, next) {
  try {
    const result = await pool.query(
      `SELECT id, name, email, message, created_at
       FROM messages ORDER BY created_at DESC`
    );
    res.json({ data: result.rows });
  } catch (err) {
    next(err);
  }
}

module.exports = { createMessage, listMessages };
