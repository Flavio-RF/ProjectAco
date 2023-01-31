const { body, param } = require("express-validator");

module.exports = {
  validateClient: [
    body("name").notEmpty().exists().withMessage("the field can't be empty."),
    body("address")
      .notEmpty()
      .exists()
      .withMessage("the field can't be empty."),
    body("zone").notEmpty().withMessage("the field can't be empty.").exists(),
    body("email")
      .isEmail()
      .withMessage("Invalid Email")
      .exists()
      .withMessage("the field can't be undefined."),
    body("phone").exists().withMessage("the field can't be undefined."),
    body("mobile").exists().withMessage("the field can't be undefined."),
  ],
};
