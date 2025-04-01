const { ErrorResponse } = require("../utils/common")
const AppError = require("../utils/errors/appError")

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating an airplane"

    ErrorResponse.error = new AppError(
      ["modelNumber not found in the incoming request in the correct form"],
      400
    )
    return res.status(400).json(ErrorResponse)
  }
  next()
}

module.exports = {
  validateCreateRequest,
}
