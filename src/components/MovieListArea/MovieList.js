import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MovieListHeading from './MovieListHeading'
import './MovieRow.css'
const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    const [scrollX, setScrollX] = useState(0)
    // console.log(props.movies.results.length)
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = props.movies.results.length*210;
        if((window.innerWidth-listW)>x){
            x = (window.innerWidth-listW) - 60
        }
        setScrollX(x)
    }
    return(
        <>
        <div className="movieRow">
            <MovieListHeading heading = {props.heading}/>
            <div className="movieRow-left">
                <AiOutlineArrowLeft style={{fontSize:50}} onClick={handleLeftArrow}/>
            </div>
            <div className="movieRow-right">
                <AiOutlineArrowRight style={{fontSize:50}} onClick={handleRightArrow}/>
            </div>
            <div className="movieRow-listarea">
            
                <div className="movieRow-list" style={{
                    marginLeft:scrollX,
                    width: props.movies.length * 210
                }}>
                    {props.movies.results.map((movie, index)=>
                        <Link to={`/watch/${movie.id}`} key={index} className="movieRow-item">
                            <img src = {`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='movie'></img>
                            {/* <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                                <FavouriteComponent/>
                            </div> */}
                        </Link>
                    )}
                </div>
            </div>
            
        </div>
        </>
    )
}
export default MovieList