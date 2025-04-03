const router = require("express").Router()

const { AirportController } = require("../../controllers")
const { Airport } = require("../../database/models")
const { ValidateId } = require("../../middlewares")

router.route("/").post(AirportController.createAirport).get(AirportController.getAirports)

router
  .route("/:id")
  .get(ValidateId(Airport), AirportController.getAirport)
  .patch(ValidateId(Airport), AirportController.updateAirport)
  .delete(ValidateId(Airport), AirportController.deleteAirport)

module.exports = router
