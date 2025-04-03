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
  async destroy(data) {
    const response = await this.model.destroy({ where: { id: data } })

    return response
  }
  async get(data, model) {
    const response = await this.model.findByPk(data, model ? { include: model } : {})
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
