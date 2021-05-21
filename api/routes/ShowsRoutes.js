const express = require("express");
const router = express.Router();

const showsController = require("../controllers/ShowsControllers");

router.post("", showsController.createShows);

module.exports = router;
