const CrudRepository = require("./crudRepositories")
const { Airplane } = require("../database/models")

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane)
  }
}

module.exports = AirplaneRepository
