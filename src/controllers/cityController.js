const { CityService } = require("../services")
const { SuccessResponse, ErrorResponse } = require("../utils/common")

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    })
    SuccessResponse.data = city
    SuccessResponse.message = "Successfully created a city"
    return res.status(201).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse)
  }
}

module.exports = {
  createCity,
}
