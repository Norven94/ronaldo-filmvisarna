import React from "react";

import "../scss/MovieCard.scss";

const MovieCard = (props) => {
  // use props to get the correct movie data, and then show image, title, genres, length and price in every MovieCard.

  return (
    <div onClick={props.onClick} className="movieCard">
      <div className="imageContainer">
        <img src={props.movie.coverImage} alt="movie poster" />
      </div>


      <div className="movieInfo">
        <div className="movieTitle">
          <span> {props.movie.title} </span>
        </div>
        <span>{props.movie.genre.join(", ")} </span>
        <br></br>
        <span>{props.movie.timeLength} min / </span>
        <span>{props.movie.price} kr</span>
      </div>
    </div>
  );
};

export default MovieCard;
