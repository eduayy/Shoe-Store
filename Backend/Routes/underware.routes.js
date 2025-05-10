const express = require("express");
const router = express.Router();
const { getUnderware } = require("../Controllers/underware.controllers.js");

router.get("/", getUnderware);

module.exports = router;
