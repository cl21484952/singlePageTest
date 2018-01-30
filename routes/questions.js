const path = require("path");
const express = require("express");
const router = express.Router();

const Question = require('../models/question');

router.get('/', (req, res, next) => {
  res.send("Hi :D");
});

module.exports = router;
