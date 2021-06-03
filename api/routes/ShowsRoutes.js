const express = require("express");
const router = express.Router();

const showsController = require("../controllers/ShowsControllers");

router.get("/show/:id", showsController.getShowById);
router.get("/:id", showsController.getShowsByMovieId);
router.post("", showsController.createShows);



module.exports = router;
