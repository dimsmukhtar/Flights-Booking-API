const CrudRepository = require("./crudRepositories")
const { Flight } = require("../database/models")

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight)
  }

  async getALlFlights(filter, order) {
    const flights = await Flight.findAll({ where: filter, order })
    return flights
  }
}

module.exports = FlightRepository
