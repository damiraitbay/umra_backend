// src/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bookingsRouter = require("./routes/bookings");
const messagesRouter = require("./routes/messages");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

// CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
  methods: ["GET", "POST", "OPTIONS"],
};
app.use(cors(corsOptions));

// JSON body parser
app.use(express.json());

// Routes
app.use("/api/bookings", bookingsRouter);
app.use("/api/messages", messagesRouter);

// Health
app.get("/health", (req, res) => res.json({ ok: true, time: new Date() }));

// Error handler
app.use(errorHandler);

// Start
app.listen(PORT, () => {
  console.log(`Umra backend listening on port ${PORT}`);
});
