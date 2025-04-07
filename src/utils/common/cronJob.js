const cron = require("node-cron")

const bookingService = require("../../services/bookingService")

function scheduleCrons() {
  // Schedule a cron job every 1 minutes
  cron.schedule("*/5 * * * * *", async () => {
    console.log("Checking and running a task every 1 minutes...")
    const response = await bookingService.checkExpiresBooking()
    console.log(response)
  })
}

module.exports = scheduleCrons
