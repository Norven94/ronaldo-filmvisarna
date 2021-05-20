const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const showSchema = new Schema({
salonId: {type: Schema.Types.ObjectId, ref:"Salon"},
movieId: {type: Schema.Types.ObjectId, ref:"Movie"},
date: {type: String},
time: {type: String},
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
