import React from 'react'

import "../scss/MovieCard.scss";

const MovieCard = (props) => {

    return (
        <div>

            <div className="imageContainer">
                <img src={props.movie.coverImage} />
            </div>

            <div className="movieTitle">
                <h2> {props.movie.title} </h2>
            </div>


            <div className="movieInfo">
                <span>{props.movie.genre} / </span>
                <span>{props.movie.timeLength} min / </span>
                <span>{props.movie.price} kr</span>
            </div>
            
        </div>
    )
}

export default MovieCard;

