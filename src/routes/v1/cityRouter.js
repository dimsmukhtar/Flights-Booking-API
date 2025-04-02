const router = require("express").Router()

const { CityController } = require("../../controllers")

router.route("/").post(CityController.createCity).get(CityController.getCities)

router.route("/:id").get(CityController.getCity)

module.exports = router
