const express = require("express");
const router = express.Router();

const movieControllers = require("../controllers/MovieControllers");

router.get("", movieControllers.getAllMovies);

module.exports = router;