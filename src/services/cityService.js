const { CityRepository } = require("../repositories")
const AppError = require("../utils/errors/appError")
const SequelizeError = require("../utils/errors/sequelizeError")
const { Airport } = require("../database/models")

const cityRepository = new CityRepository()

async function createCity(data) {
  try {
    if (data.name === "") throw new AppError("Cannot create an empty string city", 400)
    const city = await cityRepository.create(data)
    return city
  } catch (error) {
    throw SequelizeError(error, "Error while creating city", error.statusCode)
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll()
    return cities
  } catch (error) {
    throw SequelizeError(error, "Error while fetching all cities", error.statusCode)
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id, Airport)
    return city
  } catch (error) {
    throw SequelizeError(error, "Error while fetching a city", error.statusCode)
  }
}

async function deleteCity(id) {
  try {
    const city = await cityRepository.destroy(id)
    return city
  } catch (error) {
    throw SequelizeError(error, "Error while deleting a city", error.statusCode)
  }
}

async function updateCity(id, data) {
  try {
    if (data.name === undefined)
      throw new AppError("Cannot update city because no name is provided", 400)

    if (data.name === "") throw new AppError("Cannot update with an empty string city", 400)
    const city = await cityRepository.update(id, data)
    return city
  } catch (error) {
    throw SequelizeError(error, "Error while updating city", error.statusCode)
  }
}

module.exports = { createCity, getCities, getCity, deleteCity, updateCity }
