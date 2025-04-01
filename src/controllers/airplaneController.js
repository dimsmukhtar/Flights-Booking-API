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
    SuccessResponse.message = "Successfully fetched all airplane"
    return res.status(200).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
}
