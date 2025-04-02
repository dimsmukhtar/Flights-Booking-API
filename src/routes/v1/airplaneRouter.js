const router = require("express").Router()

const { Airplane } = require("../../database/models")
const { AirplaneController } = require("../../controllers")
const { ValidateId } = require("../../middlewares")

// api/v1/airplanes
router.route("/").post(AirplaneController.createAirplane).get(AirplaneController.getAirplanes)

router
  .route("/:id")
  .get(ValidateId(Airplane), AirplaneController.getAirplane)
  .delete(ValidateId(Airplane), AirplaneController.deleteAirplane)
  .patch(ValidateId(Airplane), AirplaneController.updateAirplane)

module.exports = router
