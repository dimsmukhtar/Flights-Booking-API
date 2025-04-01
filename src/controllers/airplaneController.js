const { AirplaneService } = require("../services")
const { SuccessResponse, ErrorResponse } = require("../utils/common")

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })
    SuccessResponse.data = airplane
    SuccessResponse.message = "Successfully created an airplane"
    return res.status(201).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes()
    SuccessResponse.data = airplanes
    SuccessResponse.message = "Successfully fetched all airplanes"
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}
async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id)
    SuccessResponse.data = airplane
    SuccessResponse.message = `Successfully fetched airplane with id ${req.params.id}`
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

async function deleteAirplane(req, res) {
  try {
    const airplane = await AirplaneService.deleteAirplane(req.params.id)
    SuccessResponse.data = airplane
    SuccessResponse.message = `Successfully deleted airplane with id ${req.params.id}`
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

async function updateAirplane(req, res) {
  try {
    const airplane = await AirplaneService.updateAirplane(req.params.id, {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })
    SuccessResponse.data = airplane
    SuccessResponse.message = `Successfully updated airplane with id ${req.params.id}`
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
}
