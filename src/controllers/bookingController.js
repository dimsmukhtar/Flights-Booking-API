const { BookingService } = require("../services")
const AppError = require("../utils/errors/appError")
const { successResponse } = require("../utils/common/successResponse")

const inMemoryDb = {}

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

async function makeFakePayment(req, res, next) {
  try {
    // idempotency key concept, to avoid duplicate payment
    const idempotencykey = req.headers["x-idempotency-key"]
    if (!idempotencykey) {
      return next(new AppError("To make payment request, Idempotency key is required", 400))
    }
    if (inMemoryDb[idempotencykey]) {
      return next(new AppError("Cannot retry on a successful payment", 400))
    }
    inMemoryDb[idempotencykey] = idempotencykey
    const payment = await BookingService.makeFakePayment(req.params.id)
    return successResponse(res, "Successfully create a payment", payment, 201)
  } catch (error) {
    return next(new AppError(error.message, error.statusCode))
  }
}

module.exports = {
  createBooking,
  makeFakePayment,
}
