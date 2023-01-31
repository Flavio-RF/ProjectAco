const { Model } = require("sequelize");

const createModelClient = (sequelize, DataTypes) => {
  class Clients extends Model {
    static associate(models) {
      // define association here
      // this.hasMany(models.Jobs, {
      //   foreignKey: {
      //     name: "ClientId",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "SET NULL",
      // });
    }
  }

  Clients.init(
    {
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
    },
    { sequelize: sequelize, modelName: "Clients", timestamps: false }
  );

  return Clients;
};

module.exports = { createModelClient };
