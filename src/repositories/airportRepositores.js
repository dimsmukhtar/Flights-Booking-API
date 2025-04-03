const CrudRepository = require("./crudRepositories")
const { Airport } = require("../database/models")

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport)
  }
}

module.exports = AirportRepository
