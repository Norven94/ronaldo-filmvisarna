const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const movieData = require('./movies.json');

mongoose
  .connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log("MongoDB connected");
    addedMoviesToDB();
    console.log("data added");
  }).catch((err) =>{
    console.log(err);
  });

  const addedMoviesToDB = async () => {
      await Movie.create(movieData);
      mongoose.connection.close();
  }

  


