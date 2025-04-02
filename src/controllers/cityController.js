const { CityService } = require("../services")
const {
  successResponseCreate,
  successResponseGetAll,
  successResponseGet,
  successResponseDelete,
  successResponseUpdate,
} = require("../utils/common/crudSuccessResponse")
const AppError = require("../utils/errors/appError")

async function createCity(req, res, next) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    })
    return res.status(201).json(successResponseCreate(city, "city"))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function getCities(req, res, next) {
  try {
    const cities = await CityService.getCities()
    return res.status(200).json(successResponseGetAll(cities, "cities"))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function getCity(req, res, next) {
  try {
    const city = await CityService.getCity(req.params.id)

    return res.status(200).json(successResponseGet(city, "city", req.params.id))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function deleteCity(req, res, next) {
  try {
    const city = await CityService.deleteCity(req.params.id)
    return res.status(200).json(successResponseDelete(city, "city", req.params.id))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function updateCity(req, res, next) {
  try {
    const city = await CityService.updateCity(req.params.id, {
      name: req.body.name,
    })
    return res.status(200).json(successResponseUpdate(city, "city", req.params.id))
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
