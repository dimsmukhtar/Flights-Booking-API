const router = require("express").Router()

const airplaneRouter = require("./airplaneRouter")
const cityRouter = require("./cityRouter")
const airportRouter = require("./airportRouter")

router.use("/airplanes", airplaneRouter)
router.use("/cities", cityRouter)
router.use("/airports", airportRouter)

module.exports = router
