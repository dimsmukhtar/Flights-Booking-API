"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airplane.hasMany(models.Flight, {
        foreignKey: {
          name: "airplaneId",
          allowNull: false,
        },
        as: "flights",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })

      Airplane.hasMany(models.Seat, {
        foreignKey: {
          name: "airplaneId",
          allowNull: false,
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    }
  }
  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          max: 1000,
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  )
  return Airplane
}
