const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/UserControllers.js");

router.get("/whoami", userControllers.whoami);
router.post("/login", userControllers.login);
router.get("/logout", userControllers.logout);
router.post("/register", userControllers.registerUser);


module.exports = router