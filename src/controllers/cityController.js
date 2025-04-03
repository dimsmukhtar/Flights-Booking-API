const { CityService } = require("../services")
const { successResponse } = require("../utils/common/successResponse")
const AppError = require("../utils/errors/appError")

async function createCity(req, res, next) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    })
    return successResponse(res, "Successfully create a city", city, 201)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function getCities(req, res, next) {
  try {
    const cities = await CityService.getCities()
    return successResponse(res, "Successfully fetch all cities", cities)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function getCity(req, res, next) {
  try {
    const city = await CityService.getCity(req.params.id)

    return successResponse(res, "Successfully fetch a city", city)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function deleteCity(req, res, next) {
  try {
    const city = await CityService.deleteCity(req.params.id)
    return successResponse(res, "Successfully delete a city", city)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function updateCity(req, res, next) {
  try {
    const city = await CityService.updateCity(req.params.id, {
      name: req.body.name,
    })
    return successResponse(res, "Successfully update a city", city)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  deleteCity,
  updateCity,
}
