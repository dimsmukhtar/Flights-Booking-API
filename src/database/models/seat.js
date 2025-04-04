"use strict"
const { Model } = require("sequelize")
const { SEAT_TYPE } = require("../../utils/common/enums")

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seat.belongsTo(models.Airplane, {
        foreignKey: {
          name: "airplaneId",
          allowNull: false,
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    }
  }
  Seat.init(
    {
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      row: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      col: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM([
          SEAT_TYPE.BUSINESS,
          SEAT_TYPE.ECONOMY,
          SEAT_TYPE.PREMIUM_ECONOMY,
          SEAT_TYPE.FIRST_CLASS,
        ]),
        defaultValue: SEAT_TYPE.ECONOMY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Seat",
    }
  )
  return Seat
}
