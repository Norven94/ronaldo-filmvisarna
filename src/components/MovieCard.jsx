import React from 'react'

import "../scss/MovieCard.scss";

const MovieCard = (props) => {

    return (
        <div className="movieCard" >

            <div className="imageContainer">
                <img src={props.movie.coverImage} />
            </div>

            <div className="movieTitle">
                <span> {props.movie.title} </span>
            </div>


            <div className="movieInfo">
                <span>{props.movie.genre[0]} </span>
                <span>{props.movie.genre[1]} </span>
                <span>{props.movie.genre[2]} </span>
                <span>{props.movie.genre[3]} / </span>
                <span>{props.movie.timeLength} min / </span>
                <span>{props.movie.price} kr</span>
            </div>
            
        </div>
    )
}

export default MovieCard;

