const { AirplaneRepository } = require("../repositories")
const SequelizeError = require("../utils/errors/sequelizeError")
const AppError = require("../utils/errors/appError")

const airplaneRepository = new AirplaneRepository()

async function createAirplane(data) {
  try {
    if (data.modelNumber === "") throw new AppError("Cannot create an empty string airplane", 400)
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
    throw SequelizeError(error, "Error while creating airplane", error.statusCode)
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id)
    return airplane
  } catch (error) {
    throw SequelizeError(error, "Error while creating airplane", error.statusCode)
  }
}

async function deleteAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id)
    return airplane
  } catch (error) {
    throw SequelizeError(error, "Error while creating airplane", error.statusCode)
  }
}

async function updateAirplane(id, data) {
  try {
    if (data.modelNumber === undefined)
      throw new AppError("Cannot update airplane because no modelNumber is provided", 400)

    if (data.modelNumber === "")
      throw new AppError("Cannot update with an empty string airplane", 400)
    const airplane = await airplaneRepository.update(id, data)
    return airplane
  } catch (error) {
    throw SequelizeError(error, "Error while creating airplane", error.statusCode)
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
}
