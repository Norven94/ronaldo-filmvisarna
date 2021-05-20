const Show = require("../models/Show");
const Movie = require("../models/Movie");
const Salon = require("../models/Salon");

const getDateArray = (start, end) => {
  let arr = new Array();
  let dt = new Date(start);
  while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
  }
  return arr;
}

const createShows = async (req, res) => {
    let movies = await Movie.find().exec();
    let salons = await Salon.find().exec();
    const times = ["10:00-14:00", "14:00-18:00", "18:00-22:00"]
    
    let startDate = new Date("2021-05-01");
    let endDate = new Date("2021-05-31");
    let dates = getDateArray(startDate, endDate)

    dates.map(date => {
      salons.map(salon => {        
        times.map(time => {
          movies.map(movie => {

          })
        })
      })
    })

    /*
    let show = await Show.create({
        salonId: req.body.salonId,
        movieId: req.body.movieId,
        time: req.body.time,
        date: req.body.date
      });
      console.log("New show: ", show);
    */
    res.send("Ok");
}

module.exports = {
    createShows,
  };