const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/UserControllers.js");

router.get("/whoami", userControllers.whoami);
router.post("/login", userControllers.login);
router.get("/logout", userControllers.logout);
router.post("/register", userControllers.registerUser);
router.put("/update", userControllers.editUser);

router.post("/add/:userId" , userControllers.addBooking);
router.get("/bookings" , userControllers.getMyBookings);


module.exports = router