/**
 * Esta migración se generó con el comando:
 * npx sequelize-cli migration:generate --name create-users-table
 *
 * Luego las migraciones se corren con el comando:
 * npx sequelize-cli db:migrate
 *
 * Para borrar todas las migraciones, ejecutar:
 * npx sequelize-cli db:migrate:undo:all
 *
 * Todo en uno:
 * npx sequelize-cli db:migrate:undo:all; npx sequelize-cli db:migrate; npx sequelize-cli db:seed:all;
 */

"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("Users", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("Users");
  },
};
