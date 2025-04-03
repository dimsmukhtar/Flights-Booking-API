function successResponse(res, message, data, statusCode = 200, meta = {}) {
  return res.status(statusCode).json({ success: true, message, data, ...meta })
}

module.exports = {
  successResponse,
}
