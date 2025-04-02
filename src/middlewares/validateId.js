const AppError = require("../utils/errors/appError")

const validateId = (db) => async (req, res, next) => {
  try {
    const find = await db.findByPk(req.params.id)
    if (!find) {
      return next(new AppError("ID does not exist", 404))
    }
    return next()
  } catch (error) {
    return next(new AppError(error.message, 500))
  }
}

module.exports = validateId
