const { DataTypes, Model } = require("sequelize");

const createModelUsers = (sequelize, DataTypes) => {
  class Users extends Model {}

  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(100),
        validate: {
          isEmail: {
            args: true,
            msg: "Email address must be valid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          min: 8,
        },
      },
    },
    { sequelize: sequelize, modelName: "Users", timestamps: false }
  );
  return Users;
};

module.exports = { createModelUsers };
