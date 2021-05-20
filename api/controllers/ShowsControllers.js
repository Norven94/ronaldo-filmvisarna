const Shows = require("../models/Shows");

const createShows = async (req, res) => {
    let show = await Shows.create({
        salonId: req.body.salonId,
        movieId: req.body.movieId,
        time: req.body.time,
        date: req.body.date
      });
      console.log("New show: ", show);
      res.send("Ok again");
}

module.exports = {
    createShows
  };