const express = require("express");
const router = express.Router();

const movieController = require("../controllers/MovieControllers");

router.get("", movieController.filterMovies);

module.exports = router;
