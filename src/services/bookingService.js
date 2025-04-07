const { BookingRepository } = require("../repositories")
const SequelizeError = require("../utils/errors/sequelizeError")
const db = require("../database/models")
const FlightService = require("./flightService")
const AppError = require("../utils/errors/appError")

const bookingRepository = new BookingRepository()

async function createBooking(data) {
  const { flightId: id, userId, totalSeats } = data
  const transaction = await db.sequelize.transaction()
  try {
    if (data.totalSeats === undefined)
      throw new AppError("the total of seats is required for book", 400)
    if (data.totalSeats <= 0) throw new AppError("cannot book 0 seats", 400)
    const flight = await FlightService.getFlight(id)
    if (totalSeats > flight.totalSeats) {
      throw new AppError("Not enough seats", 400)
    }
    const totalBillingAmount = totalSeats * flight.price
    const bookingPayload = {
      flightId: id,
      userId,
      noOfSeats: totalSeats,
      totalCost: totalBillingAmount,
    }
    const booking = await bookingRepository.createBooking(bookingPayload, transaction)
    if (booking) {
      await bookingRepository.updateRemainingFlightSeats(id, totalSeats, transaction)
    }
    await transaction.commit()
    return true
  } catch (error) {
    await transaction.rollback()
    throw SequelizeError(error, "Error while creating booking", error.statusCode)
  }
}

module.exports = {
  createBooking,
}
