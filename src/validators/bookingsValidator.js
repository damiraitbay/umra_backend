const { body } = require("express-validator");

const bookingValidation = [
  body("name").trim().notEmpty().withMessage("Аты-жөні міндетті"),
  body("phone").trim().notEmpty().withMessage("Телефон міндетті"),
  body("email").isEmail().withMessage("Дұрыс email енгізіңіз"),
  body("package").trim().notEmpty().withMessage("Пакет таңдау міндетті"),
];

module.exports = bookingValidation;
