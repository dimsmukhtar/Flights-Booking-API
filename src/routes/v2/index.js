const router = require("express").Router()

router.get("/info", (req, res) => {
  return res.json({ message: "coming from v2 api" })
})

module.exports = router
