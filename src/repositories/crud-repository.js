const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async destroy(id) {
        const response = await this.model.destroy({
            where: {
                id: id,
            },
        });
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if (!response) {
            throw new AppError("Resourse not found", StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAll(data) {
        const response = await this.model.findAll(data);
        return response;
    }

    async update(id, data) {
        // data -> {col: value, ...}
        const response = await this.model.update(data, {
            where: {
                id: id,
            },
        });
        return response;
    }
}

module.exports = CrudRepository;
