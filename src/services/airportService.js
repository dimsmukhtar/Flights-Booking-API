const { AirportRepository } = require("../repositories")
const SequelizeError = require("../utils/errors/sequelizeError")
const { Flight } = require("../database/models")
const { validateEmptyValueAirport } = require("../utils/common/validateEmptyValue")

const airportRepository = new AirportRepository()

async function createAirport(data) {
  try {
    validateEmptyValueAirport(data)
    const airport = await airportRepository.create(data)
    return airport
  } catch (error) {
    throw SequelizeError(error, "Error while creating airport", error.statusCode)
  }
}

async function getAirports() {
  try {
    const airports = await airportRepository.getAll()
    return airports
  } catch (error) {
    throw SequelizeError(error, "Error while fetching all airports", error.statusCode)
  }
}

async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id, [
      { model: Flight, as: "departingFlights" },
      { model: Flight, as: "arrivingFlights" },
    ])
    return airport
  } catch (error) {
    throw SequelizeError(error, "Error while fetching a airport", error.statusCode)
  }
}

async function deleteAirport(id) {
  try {
    const airport = await airportRepository.destroy(id)
    return airport
  } catch (error) {
    throw SequelizeError(error, "Error while deleting a airport", error.statusCode)
  }
}

async function updateAirport(id, data) {
  try {
    validateEmptyValueAirport(data)
    const airport = await airportRepository.update(id, data)
    return airport
  } catch (error) {
    throw SequelizeError(error, "Error while updating airport", error.statusCode)
  }
}

module.exports = { createAirport, getAirports, getAirport, updateAirport, deleteAirport }
