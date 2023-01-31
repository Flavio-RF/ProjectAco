/**
 * Los seeds se corren con el comando: `npx sequelize-cli db:seed:all`.
 *
 * ⚠️ Es necesario crear el modelo `Jobs` antes de poder ejectuar este seed.
 */

"use strict";

const { Jobs } = require("../models");
const moment = require("moment");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Jobs.create({
      state: false,
      date: moment().format("L"),
      time: moment().format("LT"),
      plague: "Cucarachas",
      observations: "Cliente especial",
      reason: "Fumigacion con liquido",
      ClientId: 1,
    });
    await Jobs.create({
      state: false,
      date: moment().format("L"),
      time: moment().format("LT"),
      plague: "Cucarachas",
      observations: "Cliente especial",
      reason: "Fumigacion con liquido",
      ClientId: 2,
    });
    await Jobs.create({
      state: false,
      date: moment().format("L"),
      time: moment().format("LT"),
      plague: "Cucarachas",
      observations: "Cliente especial",
      reason: "Fumigacion con liquido",
      ClientId: 3,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Jobs", null, {});
  },
};
