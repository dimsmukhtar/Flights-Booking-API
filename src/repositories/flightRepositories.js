const { Sequelize } = require("sequelize")
const CrudRepository = require("./crudRepositories")
const { Flight } = require("../database/models")
const db = require("../database/models")
const { addRowLockOnFlight } = require("./queries")

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight)
  }

  async getALlFlights(filter, order) {
    const flights = await Flight.findAll({ where: filter, order })
    return flights
  }

  async updateRemainingSeats(flightId, seats, decrease = true) {
    await db.sequelize.query(addRowLockOnFlight(flightId))
    const flight = await Flight.findByPk(flightId)
    if (parseInt(decrease)) {
      await flight.decrement("totalSeats", { by: seats })
    } else {
      await flight.increment("totalSeats", { by: seats })
    }
    return flight
  }
}

module.exports = FlightRepository
