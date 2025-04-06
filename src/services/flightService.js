const { FlightRepository } = require("../repositories")
const SequelizeError = require("../utils/errors/sequelizeError")
const AppError = require("../utils/errors/appError")
const { compareTime } = require("../utils/helpers/dateTimeHelper")
const { flightsFilter, flightsOrder } = require("../utils/common/filtering")
const { validateEmptyValueFlights } = require("../utils/common/validateEmptyValue")
const { Airplane, Airport, City } = require("../database/models")

const flightRepository = new FlightRepository()

async function createFlight(data) {
  try {
    validateEmptyValueFlights(data)
    if (compareTime(data.departureTime, data.arrivalTime)) {
      throw new AppError("Departure time must be before arrival time", 400)
    }
    const flight = await flightRepository.create(data)
    return flight
  } catch (error) {
    throw SequelizeError(error, "Error while creating flight", error.statusCode)
  }
}

async function getALlFlights(query) {
  try {
    const customFilter = flightsFilter(query)
    const orderFilter = flightsOrder(query)
    const flights = await flightRepository.getALlFlights(customFilter, orderFilter)
    return flights
  } catch (error) {
    throw SequelizeError(error, "Error while fetching all flights", error.statusCode)
  }
}

async function getFlight(id) {
  try {
    const flights = await flightRepository.get(id, [
      {
        model: Airplane,
        as: "airplaneDetail",
        required: true,
      }, // required: true bisa dilakukan untuk inner join fungsinya akan mereturn hasil yang memiliki data association saja, jika tidak memiliki data association maka tidak ikut di return
      {
        model: Airport,
        as: "departureAirport",
        required: true,
        include: { model: City, as: "city" },
      },
      {
        model: Airport,
        as: "arrivalAirport",
        required: true,
        include: { model: City, as: "city" },
      },
    ])
    // jika tidak memakai sourceKey dan targetKey di model airport dan flights. maka bisa dilakukan seperti ini
    // const flights = await flightRepository.get(id, [
    //   { model: Airplane, required: true },
    //   { model: Airport, as: "departingFlights", required: true, on:{
    //     col1: Sequelize.where("Flights.departureAirportCode"), "=", Sequelize.col("Airport.code")
    //   } },
    //   { model: Airport, as: "arrivingFlights", required: true,
    //     col1: Sequelize.where("Flights.arrivalAirportCode"), "=", Sequelize.col("Airport.code") },
    // ])
    return flights
  } catch (error) {
    throw SequelizeError(error, "Error while fetching a flights", error.statusCode)
  }
}

async function updateFlight(id, data) {
  try {
    validateEmptyValueFlights(data)
    const flight = await flightRepository.update(id, data)
    return flight
  } catch (error) {
    throw SequelizeError(error, "Error while updating flight", error.statusCode)
  }
}

async function updateSeat(data) {
  try {
    if (data.seats === undefined) throw new AppError("seats is required", 400)
    const response = await flightRepository.updateRemainingSeats(
      data.flightId,
      data.seats,
      data.decrement
    )
    return response
  } catch (error) {
    throw SequelizeError(error, "Error while updating totalOfSeats flight", error.statusCode)
  }
}

module.exports = { createFlight, getALlFlights, updateFlight, getFlight, updateSeat }
