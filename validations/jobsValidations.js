const { body, param } = require("express-validator");
const { Clients } = require("../models");

module.exports = {
  validateCreateJobs: [
    body("state")
      .notEmpty()
      .isBoolean()
      .withMessage("the field can't be empty."),
    body("date").notEmpty().withMessage("the field can't be empty."),
    body("time").notEmpty().withMessage("the field can't be empty."),
    body("plague")
      .isString()
      .exists()
      .withMessage("the field can't be undefined."),
    body("observations")
      .isString()
      .exists()
      .withMessage("the field can't be undefined."),
    body("reason")
      .isString()
      .exists()
      .withMessage("the field can't be undefined."),
    param("id")
      .custom(async (value) => {
        const clientID = await Clients.findByPk(value);
        if (!clientID) {
          throw new Error("Invalid ClientId");
        }
      })
      .notEmpty()
      .exists(),
  ],
  validateUpdateJobs: [
    body("state")
      .notEmpty()
      .withMessage("the field can't be empty or undefined.")
      .isBoolean(),
    body("date")
      .notEmpty()
      .withMessage("the field can't be empty or undefined."),
    body("time")
      .notEmpty()
      .withMessage("the field can't be empty or undefined."),
    body("plague")
      .isString()
      .exists()
      .withMessage("the field can't be undefined."),
    body("observations")
      .isString()
      .exists()
      .withMessage("the field can't be undefined."),
    body("reason")
      .isString()
      .exists()
      .withMessage("the field can't be undefined."),
  ],
};
