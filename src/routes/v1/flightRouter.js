const router = require("express").Router()

const { Flight } = require("../../database/models")
const { FlightController } = require("../../controllers")
const { ValidateId } = require("../../middlewares")

router.route("/").post(FlightController.createFlight).get(FlightController.getALlFlights)

router.route("/:id").patch(ValidateId(Flight), FlightController.updateFlight)

module.exports = router
