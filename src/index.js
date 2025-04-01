const express = require("express")

const { ServerConfig, Logger } = require("./settings")
const apiRoutes = require("./routes")

const app = express()

// airplane routes, v1 routes, root api routes(routes/index.js), airplane controller, airplane service, airplane repository

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", apiRoutes)

app.listen(ServerConfig.PORT, () => {
  console.log(`server is running on http://localhost:${ServerConfig.PORT}`)
})
