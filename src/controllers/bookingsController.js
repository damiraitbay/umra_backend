const pool = require("../db");
const { validationResult } = require("express-validator");

async function createBooking(req, res, next) {
  try {
    console.log("Req body:", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, email, package } = req.body;

    const result = await pool.query(
      `INSERT INTO bookings (name, phone, email, package)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, phone, email, package]
    );

    res.status(201).json({ data: result.rows[0] });
  } catch (err) {
    next(err);
  }
}

async function listBookings(req, res, next) {
  try {
    const result = await pool.query(
      `SELECT id, name, phone, email, package, created_at
       FROM bookings ORDER BY created_at DESC`
    );
    res.json({ data: result.rows });
  } catch (err) {
    next(err);
  }
}

module.exports = { createBooking, listBookings };
