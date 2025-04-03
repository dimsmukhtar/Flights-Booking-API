const AppError = require("../utils/errors/appError")
const { successResponse } = require("../utils/common/successResponse")
const { AirportService } = require("../services")

async function createAirport(req, res, next) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    })
    return successResponse(res, "Successfully create a airport", airport, 201)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function getAirports(req, res, next) {
  try {
    const airports = await AirportService.getAirports()
    return successResponse(res, "Successfully fetch all airports", airports)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function getAirport(req, res, next) {
  try {
    const airport = await AirportService.getAirport(req.params.id)

    return successResponse(res, "Successfully fetch a airport", airport)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function deleteAirport(req, res, next) {
  try {
    const airport = await AirportService.deleteAirport(req.params.id)
    return successResponse(res, "Successfully delete a airport", airport)
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
    return successResponse(res, "Successfully update a airport", airport)
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
