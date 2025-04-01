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
    throw new AppError("Error cannot create a new Airplane object", 500)
  }
}

async function getAirplanes(params) {
  try {
    const airplanes = await airplaneRepository.getAll()
    return airplanes
  } catch (error) {
    throw new AppError("Error cannot fetch all of the data from the airplane", 500)
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
}
