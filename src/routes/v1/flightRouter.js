const router = require("express").Router()

const { FlightController } = require("../../controllers")

router.route("/").post(FlightController.createFlight)

module.exports = router
