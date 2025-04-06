const router = require("express").Router()

const airplaneRouter = require("./airplaneRouter")
const cityRouter = require("./cityRouter")
const airportRouter = require("./airportRouter")
const flightRouter = require("./flightRouter")
const bookingRouter = require("./bookingRouter")

router.use("/airplanes", airplaneRouter)
router.use("/cities", cityRouter)
router.use("/airports", airportRouter)
router.use("/flights", flightRouter)
router.use("/bookings", bookingRouter)

module.exports = router
