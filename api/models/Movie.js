const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: { type: String },
    description: { type: String },
    genre: [{ type: String }],
    year: { type: String },
    language: { type: String },
    director: { type: String },
    artists: [{ type: String }],
    price: { type: Number },
    trailerUrl: { type: String },
    coverImage: { type: String },
    timeLength: { type: Number },
    age: { type: String },
    imdbRating : {type : String}
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
