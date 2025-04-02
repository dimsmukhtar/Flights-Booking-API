const { AirplaneRepository } = require("../repositories")
const { AppError, SequelizeError } = require("../utils/errors")

const airplaneRepository = new AirplaneRepository()

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data)
    return airplane
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      SequelizeError(error)
    }
    throw new AppError(error.message, error.statusCode)
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll()
    return airplanes
  } catch (error) {
    throw new AppError(error.message, error.statusCode)
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id)
    if (!airplane) {
      throw new AppError(`Error getting the airplane, id ${id} are not found`, 404)
    }
    return airplane
  } catch (error) {
    throw new AppError(error.message, error.statusCode)
  }
}

async function deleteAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id)
    if (!airplane) {
      throw new AppError(`Error deleting the airplane, id ${id} are not found`, 404)
    }
    return airplane
  } catch (error) {
    console.log(error)
    throw new AppError(error.message, error.statusCode)
  }
}

async function updateAirplane(id, data) {
  try {
    const airplane = await airplaneRepository.update(id, data)
    if (!airplane) {
      throw new AppError(`Error updating the airplane, id ${id} are not found`, 404)
    }
    return airplane
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      SequelizeError(error)
    }
    throw new AppError(error.message, error.statusCode)
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
}
