const express = require("express");
const otpController = require("../controller/otpController");

const router = express.Router();

router.post("/sendOtp", otpController.sendOtp);

module.exports = router;
