// This module allows me to make frontend fetches from my backend.
const fetch = require("node-fetch");
const json = "format=json";

// get all movies
const getAllMovies = async (req, res) => {
    let movies = await fetch(
        // api link comes here
    );
    movies = await movies.json();
    res.json(movies);
}

module.exports = {
    getAllMovies
}