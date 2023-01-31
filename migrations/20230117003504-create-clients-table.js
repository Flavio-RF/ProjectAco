"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("Clients", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        notEmpty: true,
        isUnique: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Can't be null",
          },
        },
      },
      address: {
        type: DataTypes.STRING(100),
        notEmpty: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Address can't be null",
          },
        },
      },
      zone: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Email address must be valid",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 15],
            msg: "Invalid number",
          },
        },
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 15],
            msg: "Invalid number",
          },
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("Clients");
  },
};
