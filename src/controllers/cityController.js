const { CityService } = require("../services")
const { SuccessResponse, ErrorResponse } = require("../utils/common")
const AppError = require("../utils/errors/appError")

async function createCity(req, res, next) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    })
    SuccessResponse.data = city
    SuccessResponse.message = "Successfully created a city"
    return res.status(201).json(SuccessResponse)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function getCities(req, res, next) {
  try {
    const cities = await CityService.getCities()
    SuccessResponse.data = cities
    SuccessResponse.message = "Successfully fetched all cities"
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function getCity(req, res, next) {
  try {
    const city = await CityService.getCity(req.params.id)
    SuccessResponse.data = city
    SuccessResponse.message = `Successfully get city with id ${req.params.id}`
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
}
