const router = require("express").Router()

const airplaneRouter = require("./airplaneRouter")

router.use("/airplanes", airplaneRouter)

module.exports = router
