const express = require("express");
const router = express.Router();
const { getUsers, postUsers } = require("../Controllers/users.controllers.js");

router.get("/", getUsers);
router.post("/", postUsers);

module.exports = router;
