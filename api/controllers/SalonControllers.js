const Salon = require("../models/Salon");
//const Bookings = require("../models/Bookings");

const getSalonRows = async (req, res) => {
    let salon = await Salon.findOne({ _id: req.params.salonId }).exec()
    return res.json(salon.seatsPerRow)
}

const getBookedRows = async (req, res) => {
    let salon = await Salon.findOne({ _id: req.params.salonId }).exec()
    //let bookings = await Bookings.find().exec();
    return res.json(salon.seatsPerRow)
}

module.exports = {
    getSalonRows,
    getBookedRows
  };
  