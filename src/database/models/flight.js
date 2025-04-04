"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flight.belongsTo(models.Airplane, {
        foreignKey: {
          name: "airplaneId",
          allowNull: false,
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
      Flight.belongsTo(models.Airport, {
        foreignKey: {
          name: "departureAirportCode",
          allowNull: false,
        },
        targetKey: "code",
        as: "departingFlights",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
      Flight.belongsTo(models.Airport, {
        foreignKey: {
          name: "arrivalAirportCode",
          allowNull: false,
        },

        targetKey: "code",
        as: "arrivingFlights",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    }
  }
  Flight.init(
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalAirportCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  )
  return Flight
}
