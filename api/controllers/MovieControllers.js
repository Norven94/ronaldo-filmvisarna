const Movie = require("../models/Movie");

//Should filter price, genre, age, length, date, language and searchString
const filterMovies = async (req, res) => {
    let movies = await Movie.find({    
        /*    
        "price": { $lte: req.body.price },
        "timeLength": { $lte: req.body.timeLength },
        "genre": [req.body.genre],
        */
        "price": { $lte: 500 },
        "timeLength": { $lte: 580 },
        //"genre": { $in: ["Drama"] },
        "age": "PG-13",
        "language": "English"
        //"date": { $in: ["2021-05-21"] }

    }).exec();
    res.json(movies);
}

module.exports = {
    filterMovies
}