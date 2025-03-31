const express = require("express")

const { ServerConfig, Logger } = require("./settings")
const apiRoutes = require("./routes")

const app = express()

app.use("/api", apiRoutes)

app.listen(ServerConfig.PORT, () => {
  console.log(`server is running on http://localhost:${ServerConfig.PORT}`)
})
