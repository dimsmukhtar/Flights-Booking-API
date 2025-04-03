const { FlightRepository } = require("../repositories")
const SequelizeError = require("../utils/errors/sequelizeError")
const AppError = require("../utils/errors/appError")
const { compareTime } = require("../utils/helpers/dateTimeHelper")

const flightRepository = new FlightRepository()

async function createFlight(data) {
  try {
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
    if (requiredFields.some((field) => data[field] === "")) {
      throw new AppError("Cannot create with an empty string flights", 400)
    }
    if (compareTime(data.departureTime, data.arrivalTime)) {
      throw new AppError("Departure time must be before arrival time", 400)
    }
    const flight = await flightRepository.create(data)
    return flight
  } catch (error) {
    throw SequelizeError(error, "Error while creating flight", error.statusCode)
  }
}

// async function getAirports() {
//   try {
//     const airports = await airportRepository.getAll()
//     return airports
//   } catch (error) {
//     throw SequelizeError(error, "Error while fetching all airports", error.statusCode)
//   }
// }

// async function getAirport(id) {
//   try {
//     const airport = await airportRepository.get(id)
//     return airport
//   } catch (error) {
//     throw SequelizeError(error, "Error while fetching a airport", error.statusCode)
//   }
// }

// async function deleteAirport(id) {
//   try {
//     const airport = await airportRepository.destroy(id)
//     return airport
//   } catch (error) {
//     throw SequelizeError(error, "Error while deleting a airport", error.statusCode)
//   }
// }

// async function updateAirport(id, data) {
//   try {
//     const requiredFields = ["name", "code", "address", "cityId"]
//     if (requiredFields.some((field) => data[field] === "")) {
//       throw new AppError("Cannot update with an empty string airport", 400)
//     }

//     const airport = await airportRepository.update(id, data)
//     return airport
//   } catch (error) {
//     throw SequelizeError(error, "Error while updating airport", error.statusCode)
//   }
// }

module.exports = { createFlight }
