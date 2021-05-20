//Node stuff
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

//File imports
const userRoutes = require("./routes/UserRoutes");

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

//Routes
app.use("/api/v1/users", userRoutes);

//Port Connection
app.listen(port, err => {
    if (err) return console.log(err);
    console.log(`Listening on port ${port}`);
})