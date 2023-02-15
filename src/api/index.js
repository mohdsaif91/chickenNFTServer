const express = require("express");

const emojis = require("./emojis");
const otp = require("./otp");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/otp", otp);

module.exports = router;
