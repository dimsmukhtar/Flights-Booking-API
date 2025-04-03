const AppError = require("../errors/appError")

function validationEmptyValue(requiredFields, data) {
  if (requiredFields.some((field) => data[field] === "")) {
    throw new AppError("Error because provided an empty string", 400)
  }
}

function validateEmptyValueFlights(data) {
  const requiredFields = [
    "flightNumber",
    "airplaneId",
    "departureAirportCode",
    "arrivalAirportCode",
    "departureTime",
    "arrivalTime",
    "duration",
    "price",
    "boardingGate",
    "totalSeats",
  ]
  validationEmptyValue(requiredFields, data)
}

function validateEmptyValueAirplane(data) {
  const requiredFields = ["modelNumber"]
  validationEmptyValue(requiredFields, data)
}

function validateEmptyValueAirport(data) {
  const requiredFields = ["name", "code", "address", "cityId"]
  validationEmptyValue(requiredFields, data)
}
function validateEmptyValueCity(data) {
  const requiredFields = ["name"]
  validationEmptyValue(requiredFields, data)
}

module.exports = {
  validateEmptyValueFlights,
  validateEmptyValueAirplane,
  validateEmptyValueAirport,
  validateEmptyValueCity,
}
