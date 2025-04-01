const router = require("express").Router()

const { AirplaneController } = require("../../controllers")
const { AirplaneMiddlewares } = require("../../middlewares")

// api/v1/airplanes
router
  .route("/")
  .post(AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane)
  .get(AirplaneController.getAirplanes)

module.exports = router
