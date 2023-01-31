const { DataTypes, Model } = require("sequelize");
const moment = require("moment");

const createModelJobs = (sequelize, Datatypes) => {
  class Jobs extends Model {
    static associate(models) {
      // define association here
      this.hasOne(models.Clients, {
        foreignKey: {
          name: "ClientId",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    }
  }

  Jobs.init(
    {
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
        defaultValue: DataTypes.NOW,
      },

      time: {
        type: DataTypes.TIME,
      },
      plague: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      observations: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      reason: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      ClientId: {
        type: DataTypes.INTEGER,
        references: {
          Model: "Clients",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },

    { sequelize: sequelize, modelName: "Jobs", timestamps: false }
  );

  return Jobs;
};

module.exports = { createModelJobs };
