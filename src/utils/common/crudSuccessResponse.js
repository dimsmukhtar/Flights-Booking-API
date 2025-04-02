function successResponseCreate(data, name) {
  return {
    success: true,
    message: `Successfully created a ${name}`,
    data,
  }
}
function successResponseGetAll(data, name) {
  return {
    success: true,
    message: `Successfully fetched all ${name}`,
    data,
  }
}
function successResponseGet(data, name, id) {
  return {
    success: true,
    message: `Successfully fetched ${name} with id ${id}`,
    data,
  }
}
function successResponseDelete(data, name, id) {
  return {
    success: true,
    message: `Successfully deleted ${name} with id ${id}`,
    data,
  }
}
function successResponseUpdate(data, name, id) {
  return {
    success: true,
    message: `Successfully updated ${name} with id ${id}`,
    data,
  }
}

module.exports = {
  successResponseCreate,
  successResponseGetAll,
  successResponseGet,
  successResponseDelete,
  successResponseUpdate,
}
