const { AirplaneRepository } = require("../repositories")
const AppError = require("../utils/errors/appError")

const airplaneRepository = new AirplaneRepository()

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data)
    return airplane
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = []
      error.errors.forEach((err) => {
        explanation.push(err.message)
      })
      throw new AppError(explanation, 400)
    }
    throw new AppError("Error while creating the airplane", 500)
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll()
    return airplanes
  } catch (error) {
    throw new AppError("Error while fetching the airplanes", 500)
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id, "Airplane")
    return airplane
  } catch (error) {
    if (error.statusCode === 404) {
      throw new AppError(error, error.statusCode)
    }
    throw new AppError("Error while fetching the airplane", 500)
  }
}

async function deleteAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id, "Airplane")
    return airplane
  } catch (error) {
    if (error.statusCode === 404) {
      throw new AppError(error, error.statusCode)
    }
    throw new AppError("Error while deleting the airplane", 500)
  }
}

async function updateAirplane(id, data) {
  try {
    const airplane = await airplaneRepository.update(id, data, "Airplane")
    return airplane
  } catch (error) {
    if (error.statusCode === 404) {
      throw new AppError(error, error.statusCode)
    }
    throw new AppError("Error while deleting the airplane", 500)
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
}
