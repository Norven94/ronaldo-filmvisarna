const Movie = require("../models/Movie");

//Should filter price, genre, age, length, date, language and searchString
const filterMovies = async (req, res) => {
    let movies = await Movie.find({
        ...req.body.price ? { "price": { $lte: req.body.price } } : {},
        ...req.body.timeLength ? { "timeLength": { $lte: req.body.timeLength } } : {},
        ...req.body.genre ? { "genre": { $in: req.body.genre } } : {},
        ...req.body.age ? { "age": req.body.age } : {},
        ...req.body.language ? { "language": req.body.language } : {},
        ...req.body.date ? { "date": req.body.date } : {},
        ...req.body.searchString ? {
            $or: [
                { "artists": { $in: req.body.searchString } },
                { "director": { $in: req.body.searchString } },
                { "title": { $in: req.body.searchString } }
            ]
        } : {},
    }).exec();
    res.json(movies);
}

module.exports = {
    filterMovies
}