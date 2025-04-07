const { BookingService } = require("../services")
const AppError = require("../utils/errors/appError")
const { successResponse } = require("../utils/common/successResponse")

async function createBooking(req, res, next) {
  try {
    const booking = await BookingService.createBooking({
      flightId: req.body.flightId,
      userId: req.body.userId,
      totalSeats: req.body.totalSeats,
    })
    return successResponse(res, "Successfully create a booking", booking, 201)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

module.exports = {
  createBooking,
}
