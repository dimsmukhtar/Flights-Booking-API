const { AirplaneService } = require("../services")
const { successResponse } = require("../utils/common/successResponse")
const AppError = require("../utils/errors/appError")

async function createAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })

    return successResponse(res, "Successfully create a airplane", airplane, 201)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function getAirplanes(req, res, next) {
  try {
    const airplanes = await AirplaneService.getAirplanes()
    return successResponse(res, "Successfully fetch all airplanes", airplanes)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function getAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id)
    return successResponse(res, "Successfully fetch a airplane", airplane)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function deleteAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.deleteAirplane(req.params.id)

    return successResponse(res, "Successfully delete a airplane", airplane)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function updateAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.updateAirplane(req.params.id, {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })

    return successResponse(res, "Successfully update a airplane", airplane)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
}
