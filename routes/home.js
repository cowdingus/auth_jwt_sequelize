const express = require("express");

const verifyToken = require("./../verify-token");
const controller = require("./../controllers/home");

const router = express.Router();

router.get("/", controller.index);

router.get("/home", verifyToken, controller.home);

module.exports = router;
