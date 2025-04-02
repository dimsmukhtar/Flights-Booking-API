const { AirplaneService } = require("../services")
const { SuccessResponse } = require("../utils/common")
const AppError = require("../utils/errors/appError")

async function createAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })
    SuccessResponse.data = airplane
    SuccessResponse.message = "Successfully created an airplane"
    return res.status(201).json(SuccessResponse)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function getAirplanes(req, res, next) {
  try {
    const airplanes = await AirplaneService.getAirplanes()
    SuccessResponse.data = airplanes
    SuccessResponse.message = "Successfully fetched all airplanes"
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function getAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id)
    SuccessResponse.data = airplane
    SuccessResponse.message = `Successfully fetched airplane with id ${req.params.id}`
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function deleteAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.deleteAirplane(req.params.id)
    SuccessResponse.data = airplane
    SuccessResponse.message = `Successfully deleted airplane with id ${req.params.id}`
    return res.status(200).json(SuccessResponse)
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
    SuccessResponse.data = airplane
    SuccessResponse.message = `Successfully updated airplane with id ${req.params.id}`
    return res.status(200).json(SuccessResponse)
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
