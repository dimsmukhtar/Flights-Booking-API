const { AirplaneService } = require("../services")
const {
  successResponseCreate,
  successResponseGetAll,
  successResponseGet,
  successResponseDelete,
  successResponseUpdate,
} = require("../utils/common/crudSuccessResponse")
const AppError = require("../utils/errors/appError")

async function createAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })

    return res.status(201).json(successResponseCreate(airplane, "airplane"))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function getAirplanes(req, res, next) {
  try {
    const airplanes = await AirplaneService.getAirplanes()
    return res.status(200).json(successResponseGetAll(airplanes, "airplanes"))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}
async function getAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id)
    return res.status(200).json(successResponseGet(airplane, "airplane", req.params.id))
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

async function deleteAirplane(req, res, next) {
  try {
    const airplane = await AirplaneService.deleteAirplane(req.params.id)

    return res.status(200).json(successResponseDelete(airplane, "airplane", req.params.id))
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

    return res.status(200).json(successResponseUpdate(airplane, "airplane", req.params.id))
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
