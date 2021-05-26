const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookingSchema = new Schema({
    showId: { type: Schema.Types.ObjectId, ref: "Show", required: true},
    tickets: [{type: Object, required: true}]
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;