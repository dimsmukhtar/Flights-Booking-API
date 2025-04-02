module.exports = (error) => {
  const errorMessages = error.errors.map((err) => err.message)
  error.message = errorMessages
  error.statusCode = 400
  throw error
}
