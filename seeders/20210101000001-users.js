/**
 * Los seeds se corren con el comando: `npx sequelize-cli db:seed:all`.
 *
 * ⚠️ Es necesario crear el modelo `Users` antes de poder ejectuar este seed.
 */

"use strict";

const { Users } = require("../models");
const { hashPassword } = require("../utils/password");
const jwt = require("jsonwebtoken");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const newUser = await Users.create({
        email: "admin@admin.com",
        password: await hashPassword("admin123"),
      });
      jwt.sign({ sub: newUser.id }, process.env.JWT_SECRET);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  },
};
