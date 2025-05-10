const express = require("express");
const router = express.Router();
const { getShorts } = require("../Controllers/shorts.controllers.js");

router.get("/", getShorts);

module.exports = router;
