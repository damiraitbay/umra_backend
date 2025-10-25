const express = require("express");
const router = express.Router();
const { createMessage, listMessages } = require("../controllers/messagesController");
const messageValidation = require("../validators/messagesValidator");

// POST /api/messages
router.post("/", messageValidation, createMessage);

// GET /api/messages
router.get("/", listMessages);

module.exports = router;
