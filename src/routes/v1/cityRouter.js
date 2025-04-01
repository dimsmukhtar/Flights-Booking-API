const router = require("express").Router()

const { CityController } = require("../../controllers")

router.route("/").post(CityController.createCity)

module.exports = router
