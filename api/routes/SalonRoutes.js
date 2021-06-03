const express = require("express");
const router = express.Router();

const salonControllers = require("../controllers/SalonControllers");

router.get("/:salonId", salonControllers.getSalonRows)
router.get("/booked/:showId", salonControllers.getBookedRows)

module.exports = router;