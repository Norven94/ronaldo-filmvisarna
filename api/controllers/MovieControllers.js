const Movie = require("../models/Movie");

// get all movies
const getAllMovies = async (req, res) => {

    // console.log("queries: ", req.query);

    let movies = await Movie.find().exec();
    res.json(movies);
}


module.exports = {
    getAllMovies
}