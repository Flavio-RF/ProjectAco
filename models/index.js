const { Sequelize, DataTypes } = require("sequelize");
const { createModelClient } = require("./Clients");
const { createModelJobs } = require("./Jobs");
const { createModelUsers } = require("./Users");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

const Clients = createModelClient(sequelize, DataTypes);
const Jobs = createModelJobs(sequelize, DataTypes);
const Users = createModelUsers(sequelize, DataTypes);

Clients.hasMany(Jobs, {
  foreignKey: "ClientId",
  targetKey: "id",
});
Jobs.belongsTo(Clients, {
  foreignKey: "ClientId",
  targetKey: "id",
});

module.exports = {
  sequelize,
  Clients,
  Jobs,
  Users,
};
