const CrudRepository = require("./crudRepositories")
const { Flight } = require("../database/models")

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight)
  }

  async getALlFlights(filter) {
    const flights = await Flight.findAll({ where: filter })
    return flights
  }
}

module.exports = FlightRepository
