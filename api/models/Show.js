const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const showSchema = new Schema({
salon: {type: Schema.Types.ObjectId, ref:"Salon"},
movieId: {type: Schema.Types.ObjectId, ref:"Movie"},
date: {type: Date},
time: {type: Number},
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
