const express = require("express");
const router = express.Router();
const { getClothes } = require("../Controllers/clothing.controllers.js");

router.get("/", getClothes);

module.exports = router;
