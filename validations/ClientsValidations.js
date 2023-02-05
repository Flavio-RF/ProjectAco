const { body, param } = require("express-validator");

module.exports = {
  validateClient: [
    body("name")
      .notEmpty()
      .withMessage("the field can't be empty.")
      .exists()
      .withMessage("the field can't be undefined."),
    body("address")
      .notEmpty()
      .withMessage("the field can't be empty.")
      .exists(),
    body("zone").exists().withMessage("the field can't be undefined."),
    body("email").exists().withMessage("the field can't be undefined."),
    body("phone").exists().withMessage("the field can't be undefined."),
    body("mobile").exists().withMessage("the field can't be undefined."),
  ],
};
