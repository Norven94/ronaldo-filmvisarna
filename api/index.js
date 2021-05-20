const express = require("express");
const port = 3001;
const path = require("path");

// routes
const movieRoutes = require("./routes/MovieRoutes");

// server setup
const app = express();
// for access to the body on the request object
app.use(express.json());

// movie routes
app.use("/api/v1/movies", movieRoutes);


app.listen(port, (err) => {
    if (err){
        console.error("the server could not start.");
        console.log(err);
    }
    console.log(`listening on port ${port}`);
});
