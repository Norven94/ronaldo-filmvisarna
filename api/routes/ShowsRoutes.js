const express = require("express");
const router = express.Router();

const showsController = require("../controllers/ShowsController");

router.post("", showsController.createShows);

module.exports = router;
