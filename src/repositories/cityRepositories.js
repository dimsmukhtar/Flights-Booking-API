const CrudRepository = require("./crudRepositories")
const { City } = require("../database/models")

class CityRepository extends CrudRepository {
  constructor() {
    super(City)
  }
}

module.exports = CityRepository
