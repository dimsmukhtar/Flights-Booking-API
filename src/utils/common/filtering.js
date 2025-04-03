const { Op } = require("sequelize")

function flightsFilter(query) {
  let customFilter = {}
  const endingTripDateFilter = " 23:59:59"
  if (query.trips) {
    const [departureAirportCode, arrivalAirportCode] = query.trips.split("-")
    customFilter.departureAirportCode = departureAirportCode
    customFilter.arrivalAirportCode = arrivalAirportCode
  }
  if (query.price) {
    const [priceFrom, priceTo] = query.price.split("-")
    customFilter.price = {
      [Op.and]: [{ [Op.gte]: priceFrom }, { [Op.lte]: priceTo }],
    }
  }
  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate.concat(endingTripDateFilter)],
    }
  }
  return customFilter
}

function flightsOrder(query) {
  let orderFilter = []

  if (query.sort) {
    const param = query.sort
    if (param === "departureTime_ASC") {
      orderFilter.push(["departureTime", "ASC"])
    }
    if (param === "departureTime_DESC") {
      orderFilter.push(["departureTime", "DESC"])
    }
    if (param === "price_ASC") {
      orderFilter.push(["price", "ASC"])
    }
    if (param === "price_DESC") {
      orderFilter.push(["price", "DESC"])
    }
  }
  return orderFilter
}

module.exports = { flightsFilter, flightsOrder }
