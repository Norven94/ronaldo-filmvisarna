const express = require("express");
const router = express.Router();

const movieController = require("../controllers/MovieControllers");

router.post("", movieController.filterMovies);
router.get("", movieControllers.getAllMovies);

module.exports = router;