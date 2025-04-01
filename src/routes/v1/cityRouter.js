const router = require("express").Router()

const { CityController } = require("../../controllers")
const { CityMiddlewares } = require("../../middlewares")

router.route("/").post(CityMiddlewares.validateCreateRequest, CityController.createCity)

module.exports = router
