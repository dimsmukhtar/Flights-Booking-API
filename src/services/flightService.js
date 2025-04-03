const { Op } = require("sequelize")

const { FlightRepository } = require("../repositories")
const SequelizeError = require("../utils/errors/sequelizeError")
const AppError = require("../utils/errors/appError")
const { compareTime } = require("../utils/helpers/dateTimeHelper")

const flightRepository = new FlightRepository()

async function createFlight(data) {
  try {
    const requiredFields = [
      "flightNumber",
      "airplaneId",
      "departureAirportCode",
      "arrivalAirportCode",
      "departureTime",
      "arrivalTime",
      "duration",
      "price",
      "boardingGate",
      "totalSeats",
    ]
    if (requiredFields.some((field) => data[field] === "")) {
      throw new AppError("Cannot create with an empty string flights", 400)
    }
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
  let customFilter = {}
  if (query.trips) {
    const [departureAirportCode, arrivalAirportCode] = query.trips.split("-")
    customFilter.departureAirportCode = departureAirportCode
    customFilter.arrivalAirportCode = arrivalAirportCode
  }
  if (query.price) {
    const [priceFrom, priceTo] = query.price.split("-")
    customFilter.price = {
      [Op.and]: [{ [Op.gte]: priceFrom }, { [Op.lte]: priceTo }],
    }
  }
  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.gte]: query.tripDate,
    }
  }
  try {
    const flights = await flightRepository.getALlFlights(customFilter)
    return flights
  } catch (error) {
    throw SequelizeError(error, "Error while fetching all flights", error.statusCode)
  }
}

async function updateFlight(id, data) {
  try {
    const flight = await flightRepository.update(id, data)
    return flight
  } catch (error) {
    throw SequelizeError(error, "Error while updating flight", error.statusCode)
  }
}

module.exports = { createFlight, getALlFlights, updateFlight }
