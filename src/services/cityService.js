const { CityRepository } = require("../repositories")
const { AppError, SequelizeError } = require("../utils/errors")

const cityRepository = new CityRepository()

async function createCity(data) {
  try {
    const city = await cityRepository.create(data)
    return city
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      SequelizeError(error)
    }

    throw new AppError(error.message, error.statusCode)
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll()
    return cities
  } catch (error) {
    throw new AppError(error.message, error.statusCode)
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id)
    if (!city) {
      throw new AppError(`Error getting the city, id ${id} are not found`, 404)
    }
    return city
  } catch (error) {
    throw new AppError(error.message, error.statusCode)
  }
}

async function deleteCity(id) {
  try {
  } catch (error) {
    throw new AppError(error.message, error.statusCode)
  }
}

module.exports = { createCity, getCities, getCity }
