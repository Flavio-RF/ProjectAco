/**
 * Los seeds se corren con el comando: `npx sequelize-cli db:seed:all`.
 *
 * ⚠️ Es necesario crear el modelo `Clients` antes de poder ejectuar este seed.
 */

"use strict";

const { Clients } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Clients.create({
      name: "User 1",
      address: "Calle 1",
      zone: "Pocitos",
      email: "demo@demo.com",
      phone: "4474-6506",
      mobile: "099445588",
    });
    await Clients.create({
      name: "User 2",
      address: "Calle 2",
      zone: "Pocitos",
      email: "demo2@demo.com",
      phone: "4474-6506",
      mobile: "099445588",
    });
    await Clients.create({
      name: "User 3",
      address: "Calle 3",
      zone: "Pocitos",
      email: "demo3@demo.com",
      phone: "4474-6506",
      mobile: "099445588",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Clients", null, {});
  },
};
