const { AirplaneRepository } = require("../repositories")
const { SequelizeError } = require("../utils/errors")

const airplaneRepository = new AirplaneRepository()

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data)
    return airplane
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      SequelizeError(error)
    }
    throw new Error(error.message, error.statusCode)
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll()
    return airplanes
  } catch (error) {
    throw new Error(error.message, error.statusCode)
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id)
    return airplane
  } catch (error) {
    throw new Error(error.message, error.statusCode)
  }
}

async function deleteAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id)
    return airplane
  } catch (error) {
    throw new Error(error.message, error.statusCode)
  }
}

async function updateAirplane(id, data) {
  try {
    const airplane = await airplaneRepository.update(id, data)
    return airplane
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      SequelizeError(error)
    }
    throw new Error(error.message, error.statusCode)
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
}
