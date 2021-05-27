const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/UserControllers.js");


router.post("/add" , userControllers.addBooking);
router.post("/login", userControllers.login);
router.post("/register", userControllers.registerUser);

router.put("/update", userControllers.editUser);

router.get("/bookings/:userId" , userControllers.getUserBookings);
router.get("/whoami", userControllers.whoami);
router.get("/logout", userControllers.logout);
router.get("", userControllers.getAllUsers); //Only for testing, remove for production.





module.exports = router