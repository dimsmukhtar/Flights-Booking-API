const router = require("express").Router()

const { City } = require("../../database/models")
const { CityController } = require("../../controllers")
const { ValidateId } = require("../../middlewares")

router.route("/").post(CityController.createCity).get(CityController.getCities)

router
  .route("/:id")
  .get(ValidateId(City), CityController.getCity)
  .delete(ValidateId(City), CityController.deleteCity)
  .patch(ValidateId(City), CityController.updateCity)

module.exports = router
