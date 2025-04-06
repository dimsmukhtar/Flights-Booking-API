const CrudRepository = require("./crudRepositories")
const { Booking } = require("../database/models")

class BookingRepository extends CrudRepository {
  constructor() {
    super(Booking)
  }
}

module.exports = BookingRepository
