const { Sequelize, DataTypes } = require("sequelize");
const { createModelClient } = require("./Clients");
const { createModelJobs } = require("./Jobs");
const { createModelUsers } = require("./Users");

const connectionConfig = {
  host: process.env.DB_HOST, // Dirección del servidor
  port: process.env.DB_PORT, // Puerto del servidor
  dialect: process.env.DB_DIALECT, // Tipo de base de datos
  logging: true, // Deshabilitamos la salida por consola
};

if (connectionConfig.dialect === "postgres") {
  connectionConfig.dialectModule = require("pg");
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  connectionConfig
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
