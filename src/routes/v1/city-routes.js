const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");
const router = express.Router();

// /api/v1/cities -> POST
router.post(
    "/",
    CityMiddlewares.validateCreateRequest,
    CityController.createCity
);

// /api/v1/cities -> Get
router.get("/", CityController.getCities);

module.exports = router;
