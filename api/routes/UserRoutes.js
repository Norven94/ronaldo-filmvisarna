const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserControllers.js")

router.get("/whoami", userController.whoami);


module.exports = router