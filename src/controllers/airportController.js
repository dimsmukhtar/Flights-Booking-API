const AppError = require("../utils/errors/appError")
const {
  successResponseCreate,
  successResponseGetAll,
  successResponseGet,
  successResponseDelete,
  successResponseUpdate,
} = require("../utils/common/crudSuccessResponse")
const { AirportService } = require("../services")

async function createAirport(req, res, next) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    })
    return res.status(201).json(successResponseCreate(airport, "airport"))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function getAirports(req, res, next) {
  try {
    const airports = await AirportService.getAirports()
    return res.status(200).json(successResponseGetAll(airports, "airports"))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function getAirport(req, res, next) {
  try {
    const airport = await AirportService.getAirport(req.params.id)

    return res.status(200).json(successResponseGet(airport, "airport", req.params.id))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function deleteAirport(req, res, next) {
  try {
    const airport = await AirportService.deleteAirport(req.params.id)
    return res.status(200).json(successResponseDelete(airport, "airport", req.params.id))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function updateAirport(req, res, next) {
  try {
    const airport = await AirportService.updateAirport(req.params.id, {
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    })
    return res.status(200).json(successResponseUpdate(airport, "airport", req.params.id))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  deleteAirport,
  updateAirport,
}
