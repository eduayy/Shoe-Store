const express = require("express");
const router = express.Router();
const { getSportShoes } = require("../Controllers/sport-shoes.controllers.js");

router.get("/", getSportShoes);

module.exports = router;
