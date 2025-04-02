const { CityRepository } = require("../repositories")
const { SequelizeError } = require("../utils/errors")

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

    throw new Error(error.message, error.statusCode)
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll()
    return cities
  } catch (error) {
    throw new Error(error.message, error.statusCode)
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id)
    return city
  } catch (error) {
    throw new Error(error.message, error.statusCode)
  }
}

async function deleteCity(id) {
  try {
    const city = await cityRepository.destroy(id)
    return city
  } catch (error) {
    throw new Error(error.message, error.statusCode)
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data)
    return city
  } catch (error) {
    throw new Error(error.message, error.statusCode)
  }
}

module.exports = { createCity, getCities, getCity, deleteCity, updateCity }
