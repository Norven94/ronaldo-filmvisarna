const Movie = require("../models/Movie");

//Should filter price, genre, age, length, date, language and searchString
const filterMovies = async (req, res) => {
    if (req.body.genre.length === 0) {
        req.body.genre = null
    }

    let querySearch = new RegExp(
        `${req.body.searchString ? req.body.searchString : ""}\\w*`,
        "gi"
      );

    console.log(req.body)
    let movies = await Movie.find({
        ...req.body.price ? { "price": { $lte: req.body.price } } : {},
        ...req.body.timeLength ? { "timeLength": { $lte: req.body.timeLength } } : {},
        ...req.body.genre ? { "genre": { $in: req.body.genre } } : {},
        ...req.body.age ? { "age": req.body.age } : {},
        ...req.body.language ? { "language": req.body.language } : {},
        ...req.body.date ? { "date": req.body.date } : {},
        ...querySearch ? {
            $or: [
                { "artists": { $in: querySearch } },
                { "director": { $in: querySearch } },
                { "title": { $in: querySearch } }
            ]
        } : {},
    }).exec();
    res.json(movies);
}

// get all movies
const getAllMovies = async (req, res) => {
    let movies = await Movie.find().exec();
    res.json(movies);
}

module.exports = {
    filterMovies,
    getAllMovies
}