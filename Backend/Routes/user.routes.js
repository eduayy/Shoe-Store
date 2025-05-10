const express = require("express");
const router = express.Router();
const {
  getUsers,
  postUsers,
  postLogin,
} = require("../Controllers/users.controllers.js");

router.get("/", getUsers);
router.post("/", postUsers);
router.post("/login", postLogin);

module.exports = router;
