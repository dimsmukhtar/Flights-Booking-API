const { Logger } = require("../settings")
const AppError = require("../utils/errors/appError")

class CrudRepository {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    const response = await this.model.create(data)
    return response
  }
  async destroy(data, name) {
    const response = await this.model.destroy({ where: { id: data } })
    if (!response) {
      throw new AppError(`Error deleting the ${name}, id ${data} are not found`, 404)
    }
    return response
  }
  async get(data, name) {
    const response = await this.model.findByPk(data)

    if (!response) {
      throw new AppError(`Error getting the ${name}, id ${data} are not found`, 404)
    }
    return response
  }
  async getAll() {
    const response = await this.model.findAll()
    return response
  }
  async update(id, data) {
    const response = await this.model.update(data, { where: { id: id } })
    return response
  }
}

module.exports = CrudRepository
