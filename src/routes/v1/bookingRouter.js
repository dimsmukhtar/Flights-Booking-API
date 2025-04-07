const router = require("express").Router()

const { BookingController } = require("../../controllers")

router.post("/", BookingController.createBooking)
router.post("/:id/payment", BookingController.makeFakePayment)

module.exports = router
