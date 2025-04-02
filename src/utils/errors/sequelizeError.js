const { ValidationError, UniqueConstraintError } = require("sequelize")
const AppError = require("../../utils/errors/appError")

module.exports = (error, message, statusCode) => {
  let errorMessage = error.message || "Internal server error"

  const isValidationError =
    error instanceof ValidationError || error instanceof UniqueConstraintError

  if (isValidationError) {
    const errorMessages = error.errors.map((err) => err.message)
    errorMessage = errorMessages
  }

  const parsedStatusCode = isValidationError ? 400 : statusCode

  return new AppError(`${message}: ${errorMessage}`, parsedStatusCode)
}
