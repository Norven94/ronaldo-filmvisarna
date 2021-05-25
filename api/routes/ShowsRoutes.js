const express = require("express");
const router = express.Router();

const showsController = require("../controllers/ShowsControllers");

router.post("", showsController.createShows);
router.get("/:id", showsController.getShowsByMovieId);

module.exports = router;
