const { Router } = require("express");
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/patapila", (req, res) => {
  res.render("patapila");
});

router.get("/firulais", (req, res) => {
  res.render("firulais");
});

module.exports = router;
