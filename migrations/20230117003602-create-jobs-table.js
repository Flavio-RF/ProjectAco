"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("Jobs", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      date: {
        type: DataTypes.DATEONLY,
      },
      time: {
        type: DataTypes.TIME,
      },
      plague: {
        type: DataTypes.STRING(20),
      },
      observations: {
        type: DataTypes.STRING(100),
      },
      reason: {
        type: DataTypes.STRING(100),
      },
      ClientId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Clients",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("Jobs");
  },
};
