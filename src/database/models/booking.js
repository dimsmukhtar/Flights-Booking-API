"use strict"
const { Model } = require("sequelize")
const { BOOKING_STATUS } = require("../../utils/common/enums")
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      flightId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM([
          BOOKING_STATUS.BOOKED,
          BOOKING_STATUS.CANCELLED,
          BOOKING_STATUS.INITIATED,
          BOOKING_STATUS.PENDING,
        ]),
        defaultValue: BOOKING_STATUS.INITIATED,
        allowNull: false,
      },
      totalCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      noOfSeats: {
        // total seats yang user pesan
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  )
  return Booking
}
