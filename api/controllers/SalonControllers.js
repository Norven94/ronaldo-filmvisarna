const Salon = require("../models/Salon");
const Booking = require("../models/Booking");

const getSalonRows = async (req, res) => {
    let salon = await Salon.findOne({ _id: req.params.salonId }).exec()
    return res.json(salon.seatsPerRow)
}

const getBookedRows = async (req, res) => {
    let taken = [];
    Booking.find({ showId: req.params.showId}).exec(async (err, result) => {
        if (err) {
            res.status(400).json({ error: `Show with id ${req.params.showId} does not exist` });
            return;
        }

        for (let i = 0; i < result.length; i++) {
            result[i].tickets.map(ticket => {
                taken.push({row: ticket.rowNumber, seatNumber: ticket.seatNumber})
            })
        }
        res.json(taken)
    });    
}

module.exports = {
    getSalonRows,
    getBookedRows
  };
  