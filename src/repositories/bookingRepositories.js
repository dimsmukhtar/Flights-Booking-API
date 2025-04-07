const CrudRepository = require("./crudRepositories")
const { Booking, Flight } = require("../database/models")
const db = require("../database/models")
const { addRowLockOnFlight } = require("./queries")

class BookingRepository extends CrudRepository {
  constructor() {
    super(Booking)
  }

  async createBooking(data, transaction) {
    const response = await Booking.create(data, { transaction: transaction })
    return response
  }

  async updateRemainingFlightSeats(flightId, totalSeats, transaction) {
    await db.sequelize.query(addRowLockOnFlight(flightId))
    const flight = await Flight.findByPk(flightId)
    await flight.decrement("totalSeats", { by: totalSeats }, { transaction: transaction })
    return flight
  }

  async updateBooking(id, data, transaction) {
    const response = await this.model.update(
      data,
      { where: { id: id } },
      { transaction: transaction }
    )
    return response
  }
}

module.exports = BookingRepository
