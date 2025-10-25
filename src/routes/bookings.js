const express = require("express");
const router = express.Router();
const { createBooking, listBookings } = require("../controllers/bookingsController");
const bookingValidation = require("../validators/bookingsValidator");

// POST /api/bookings
router.post("/", bookingValidation, createBooking);

// GET /api/bookings
router.get("/", listBookings);

module.exports = router;
