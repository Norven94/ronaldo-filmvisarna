//Node stuff
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

//File imports
const userRoutes = require("./routes/UserRoutes");
const movieRoutes = require("./routes/MovieRoutes");
const showsRoutes = require("./routes/ShowsRoutes");
const salonRoutes = require("./routes/SalonRoutes");

//Variables
const port = 3001;
const uri = "mongodb+srv://Norven94:ronaldoFilmvisarna@cluster0.56eqp.mongodb.net/Filmvisarna?retryWrites=true&w=majority";

// Mongo DB Atlas Setup
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));


//-------------------------
//-------MIDDLEWARE--------
//-------------------------
app.use(express.json());
app.use(
    session({
        secret: "Ronaldo",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: "auto" },
    })
);

//ACL setup
app.use((req, res, next) => {
  let params = req.path.match(/[\d\w]+$/);
  if (req.path.match(/^\/api\/v1\/users\/bookings.*/) && req.method === "GET" 
    || (req.path.match(/^\/api\/v1\/users\/add.*/) && req.method === "POST")
    || (req.path.match(/^\/api\/v1\/users\/.*/) && req.method === "DELETE")
    || (req.path.match(/^\/api\/v1\/users\/update.*/) && req.method === "PUT")
    ) {    

    if (req.session.user !== undefined && req.session.user._id === params[0]) {
      return next();
    } else {
      return res.status(403).json({error: "You need to be logged in to the user that you want to access the data for"})
    }
  }
  next();
});

//Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/shows", showsRoutes);
app.use("/api/v1/salons", salonRoutes);


//Port Connection
app.listen(port, err => {
    if (err) return console.log(err);
    console.log(`Listening on port ${port}`);
})