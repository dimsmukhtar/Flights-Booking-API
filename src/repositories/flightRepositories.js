const CrudRepository = require("./crudRepositories")
const { Flight } = require("../database/models")

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight)
  }
}

module.exports = FlightRepository
