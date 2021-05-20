//Node stuff
const express = require("express");
const session = require("express-session");
const app = express();

//File imports
const userRoutes = require("./routes/UserRoutes");


const port = 3001;

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