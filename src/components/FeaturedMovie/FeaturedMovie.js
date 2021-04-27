import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';
import './FeaturedMovie.css';

export default ({item}) => {
    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    return (
        <section className="featured" style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.poster_path})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'80vh'
        }}>
           
            <div className='featured-vertical'>
                <div className='featured-horizontal'>
                    <div className='featured-block'>
                        <div className='featured-name'>{item.original_name}</div>
                        <div className='featured-info'>
                            <div className='featured-points'>Imdb rating: {item.vote_average}</div>
                            <div className='featured-year'>{firstDate.getFullYear()}</div>
                            <div className='featured-director'>Number of seasons: {item.number_of_seasons}</div>
                        </div>
                        <div className='featured-description'>
                            {item.overview}
                        </div>
                        <div className='featured-buttons'>
                            <a href={`/watch/${item.id}`} className='featured-watchbutton'><AiFillPlayCircle/> Watch</a>
                            <a href={`/addToFavourites/${item.id}`} className='featured-addbutton'><IoIosAddCircle/> Add to favourites</a>
                        </div>
                        <div className='featured-genres'>
                            Gengres: <strong>{genres.join(', ')}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}