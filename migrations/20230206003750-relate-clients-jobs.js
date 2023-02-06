"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // relate user to posts
    await queryInterface.addColumn("Jobs", "ClientId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Clients",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Jobs", "ClientId");
  },
};
