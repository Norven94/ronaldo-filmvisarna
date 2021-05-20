const mongoose = require('mongoose');
const Movie = require('.model/Movie');
const movieData = require('./movies.json');
const uri = '';

mongoose
  .connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log("MongoDB connected");
    addedMoviesToDB();
  }).catch((err) =>{
    console.log(err);
  });

  const addedMoviesToDB = async () => {
      await Movie.create(movieData);
      mongoose.connection.close();
  }

  


