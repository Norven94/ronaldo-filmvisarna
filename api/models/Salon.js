const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const salonSchema = new Schema({
name: {type:String},
seats: {type:Number},
seatsPerRow: {type:[Number]}
});

const Salon = mongoose.model("Salon", salonSchema);

module.exports = Salon;
