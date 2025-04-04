const { FlightRepository } = require("../repositories")
const SequelizeError = require("../utils/errors/sequelizeError")
const AppError = require("../utils/errors/appError")
const { compareTime } = require("../utils/helpers/dateTimeHelper")
const { flightsFilter, flightsOrder } = require("../utils/common/filtering")
const { validateEmptyValueFlights } = require("../utils/common/validateEmptyValue")
const { Airplane, Airport } = require("../database/models")

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
      { model: Airplane },
      { model: Airport, as: "departingFlights" },
      { model: Airport, as: "arrivingFlights" },
    ])
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

module.exports = { createFlight, getALlFlights, updateFlight, getFlight }
