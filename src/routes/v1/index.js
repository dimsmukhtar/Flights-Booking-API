const router = require("express").Router()

const airplaneRouter = require("./airplaneRouter")
const cityRouter = require("./cityRouter")

router.use("/airplanes", airplaneRouter)
router.use("/cities", cityRouter)

module.exports = router
