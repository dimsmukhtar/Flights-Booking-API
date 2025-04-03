const { FlightService } = require("../services")
const { successResponse } = require("../utils/common/successResponse")

const SequelizeError = require("../utils/errors/sequelizeError")
const AppError = require("../utils/errors/appError")

async function createFlight(req, res, next) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportCode: req.body.departureAirportCode,
      arrivalAirportCode: req.body.arrivalAirportCode,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    })
    return successResponse(res, "Successfully create a flight", flight, 201)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

module.exports = {
  createFlight,
}
