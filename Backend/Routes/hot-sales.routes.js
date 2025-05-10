const express = require("express");
const router = express.Router();
const { getHotSales } = require("../Controllers/hot-sales.controllers.js");

router.get("/", getHotSales);

module.exports = router;
