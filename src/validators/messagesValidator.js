const { body } = require("express-validator");

const messageValidation = [
  body("name").trim().notEmpty().withMessage("Аты-жөні міндетті"),
  body("email").isEmail().withMessage("Дұрыс email енгізіңіз"),
  body("message").trim().notEmpty().withMessage("Хабарлама мәтіні міндетті"),
];

module.exports = messageValidation;
