//Why add jsx extension?
//When you create a react component jsx is preferrable. it shows the react symbol thats it

import React from "react";

const MovieCard = ({movie}) =>{ //basically destructs props to say its movie1
    return (
        <div className='movie'>
            <div>   
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>   
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;