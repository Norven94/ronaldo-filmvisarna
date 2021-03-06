const Show = require("../models/Show");
const Movie = require("../models/Movie");
const Salon = require("../models/Salon");
const utils = require("../core/utilities");

const createShows = async (req, res) => {
  let movies = await Movie.find().exec();
  let salons = await Salon.find().exec();
  let startDateTaken = await Show.exists({ date: req.body.startDate });
  let endDateTaken = await Show.exists({ date: req.body.endDate });
  let allShows = [];

  if (startDateTaken || endDateTaken) {
    return res.json({ error: "Dates already have shows" });
  } else {
    //Send a start and an endDate with the post request to generate dates to loop through
    let startDate = new Date(req.body.startDate);
    let endDate = new Date(req.body.endDate);
    let dates = utils.getDateArray(startDate, endDate);
    let k = 0;

    //Use a while loop in order to restart the movies array when all 20 movies have already been used at least one day
    while (k < dates.length) {
      //Loop through dates to create 6 shows for each day 3 for each salon
      dates.map((date) => {
        salons.map((salon) => {
          //Reset the startTime for every salon so that the shows always start after 15:00
          let startTime = new Date(2021, 4, 20, 15, 0, 0);
          for (let i = 1; i <= 3; i++) {
            k++;
            //Convert dates to only hh:mm and add the movies length in order to set end time for the movie
            movieTime = parseInt(movies[k % movies.length].timeLength);
            let movieStart = startTime.toTimeString().split(" ")[0];
            startTime = new Date(startTime.getTime() + movieTime * 60000);
            let movieEnd = startTime.toTimeString().split(" ")[0];

            //Add 30min before next movie can start
            startTime = new Date(startTime.getTime() + 30 * 60000);

            allShows.push({
              salonId: salon._id,
              movieId: movies[k % movies.length]._id,
              time: `${movieStart}-${movieEnd}`,
              date: utils.formatDate(date),
            });

            //Add the show dates to the movies in the movie collection
            Movie.findById(movies[k % movies.length]._id).exec(
              async (err, result) => {
                if (err) {
                  res.status(400).json({ error: "Something went wrong" });
                  return;
                }
                if (!result) {
                  res.status(404).json({
                    error: `Movie with id ${
                      movies[k % movies.length]._id
                    } does not exist`,
                  });
                  return;
                }

                let newdate = utils.formatDate(date);
                let movie = result;
                movie.date.push(newdate);
                await movie.save();
              }
            );
          }
        });
      });
    }
    await Show.create(allShows);
    res.send("Ok");
  }
};

const getShowsByMovieId = async (req, res) => {
  let movie;
  try {
    movie = await Show.find({ movieId: req.params.id })
      .populate("movieId")
      .populate("salonId", "name")
      .exec();

    if (!movie) {
      res
        .status(404)
        .json({ error: `Movie with id ${req.params.id} doesn't exist` });
      return;
    }
    res.json(movie);
  } catch (err) {
    res.status(400).json({ error: "Something went wrong.." });
  }
};

const getShowById = async (req, res) => {
  let show;
  try {
    show = await Show.find({ _id: req.params.id })
      .populate("movieId")
      .populate("salonId")
      .exec();

    if (!show) {
      res
        .status(404)
        .json({ error: `Show with id ${req.params.id} doesn't exist` });
      return;
    }
    res.json(show);
  } catch (err) {
    res.status(400).json({ error: "Something went wrong.." });
  }
};

module.exports = {
  createShows,
  getShowsByMovieId,
  getShowById,
};
