const router = require("express").Router()

const { AirplaneController } = require("../../controllers")
const { AirplaneMiddlewares } = require("../../middlewares")

// api/v1/airplanes
router
  .route("/")
  .post(AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane)
  .get(AirplaneController.getAirplanes)

router.route("/:id").get(AirplaneController.getAirplane).delete(AirplaneController.deleteAirplane)

module.exports = router
