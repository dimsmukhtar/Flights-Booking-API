const { AirplaneRepository } = require("../repositories")
const SequelizeError = require("../utils/errors/sequelizeError")
const { Flight } = require("../database/models")
const { validateEmptyValueAirplane } = require("../utils/common/validateEmptyValue")

const airplaneRepository = new AirplaneRepository()

async function createAirplane(data) {
  try {
    validateEmptyValueAirplane(data)
    const airplane = await airplaneRepository.create(data)
    return airplane
  } catch (error) {
    throw SequelizeError(error, "Error while creating airplane", error.statusCode)
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll()
    return airplanes
  } catch (error) {
    throw SequelizeError(error, "Error while fetching all airplanes", error.statusCode)
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id, [{ model: Flight, as: "flights" }])
    return airplane
  } catch (error) {
    throw SequelizeError(error, "Error while fetching a airplane", error.statusCode)
  }
}

async function deleteAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id)
    return airplane
  } catch (error) {
    throw SequelizeError(error, "Error while deleting a airplane", error.statusCode)
  }
}

async function updateAirplane(id, data) {
  try {
    validateEmptyValueAirplane(data)
    const airplane = await airplaneRepository.update(id, data)
    return airplane
  } catch (error) {
    throw SequelizeError(error, "Error while updating a airplane", error.statusCode)
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
}
