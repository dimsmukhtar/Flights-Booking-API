const cron = require("node-cron")

const bookingService = require("../../services/bookingService")

function scheduleCrons() {
  // Schedule a cron job every 30 seconds
  cron.schedule("*/30 * * * * *", async () => {
    await bookingService.checkExpiresBooking()
  })
}

module.exports = scheduleCrons
