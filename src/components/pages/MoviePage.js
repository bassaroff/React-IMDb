import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Navbar from '../Navbar/Navbar'
import TMDB from '../../TMBD'
import { BiMessageAltAdd } from 'react-icons/bi';
import { BsStar, BsStarFill } from 'react-icons/bs';
import TMBD from '../../TMBD';
import { Table } from 'react-bootstrap';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import MovieList from '../MovieListArea/MovieList';
import { AiFillStar } from 'react-icons/ai';
import Reviews from './Reviews';
function MoviePage(item){
    let {id} = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const [trailer, setTrailer] = useState('')
    const [cast, setCast] = useState([]);
    const [similar, setSimilar] = useState();
    const [reviews, setReviews] = useState();

    const API_KEY = '5aaaf9174cb696d6721682d0e041661d';
    const API_BASE='https://api.themoviedb.org/3';

    const basicFetch = async (endpoint) => {
        const req = await fetch(`${API_BASE}${endpoint}`)
        const json = await req.json();
        return json;
    }
    let genres = []
    for(let i in movieInfo.genres){
        genres.push(movieInfo.genres[i].name);
    }
    const loadReviews = async() =>{
        let revs = await TMBD.getReviews(id)
        console.log("Reviews: ")
        console.log(revs)
        revs = Array.from(revs.results)
        setReviews(revs)
        console.log(revs)
    }
    const loadMovieInfo = async () => {
        let movie = await TMDB.getMovieInfo(Number(id), 'movie')
        setMovieInfo(movie)
    }
    function formatDate(string){
        var options = { year: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    const getCast = async() => {
        let c = await TMBD.getCredits(id)
        // console.log(c)
        c = Array.from(c.cast)
        
        setCast(c)
        // console.log('Cast:')
        // console.log(cast)
    }
    const getVideo = async() => {
        let video = await basicFetch(`/movie/${id}/videos?api_key=5aaaf9174cb696d6721682d0e041661d`)
        setTrailer(video)
        // console.log('Trailer:')
        // console.log(trailer)
    }
    const getSimilar = async() => {
        let movies = await TMBD.getSimilar(id)
        // console.log('Similar:')
        // console.log(movies.results)
        setSimilar(movies)
    }
    useEffect(()=>{
        loadMovieInfo();
        getCast();
        getVideo();
        getSimilar()
        loadReviews();
    },[id])
  
   
    return(
        <>
            <div className='movie-page '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='p-3' style={{background:'#333333'}}>
                                <div className='d-flex  align-items-center justify-content-lg-between'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <BiMessageAltAdd fontSize={60}/>
                                        <div style={{lineHeight:1}} className='ml-2'>
                                            <h3>{movieInfo.title}<span style={{fontSize:20, color:'#C0C0B7'}}>({formatDate(movieInfo.release_date)})</span></h3>
                                            <p style={{color:'gray'}}>{movieInfo.original_title} <i>(original title)</i></p>
                                            <p style={{color:'gray'}}>{movieInfo.adult ? "PG-18" : "PG-13"} | {genres.join(', ')} | {movieInfo.release_date}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex ml-5 align-items-center'>
                                        <BsStarFill fontSize={35} style={{color:'gold', marginRight:10}}/>
                                        <div className='h-100' style={{paddingRight:5, lineHeight:1.1}}>
                                            <p style={{fontSize:25,margin:0}}>{movieInfo.vote_average}<span  style={{color:'#C0C0B7', fontSize:15}}>/10</span></p>
                                            <p style={{margin:0, color:'#C0C0B7'}}>{movieInfo.vote_count}</p>
                                        </div>
                                        <div className='rate d-flex justify-content-lg-between align-items-center h-100' style={{borderLeft:'1px solid #C0C0B7', paddingLeft:5, paddingRight:5}}>
                                            <BsStar fontSize={40} style={{marginRight:10}}/>
                                            <p style={{margin:0}}>Rate<br></br>This</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className='col-12 d-flex'>
                                    <img src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} style={{height:300, width:'30%'}}></img>

                                    {trailer && trailer.results.length!==0 ? <ReactPlayer controls={true} playsinline={true} height={300} id='video' 
                                    url={`https://www.youtube.com/watch?v=${trailer.results[0].key}`}>
                                    </ReactPlayer> : <img  style={{height:300, width:'70%'}} src='https://i.ytimg.com/vi/5y2GTQ9jLbw/maxresdefault.jpg'/> }
                                </div>
                            </div>
                            <div style={{backgroundColor:'#EEEEEE', color:'black', padding:15}}>
                                <p>{movieInfo.overview}</p>
                                <p style={{color:'#666666', margin:0}}>Original language: <span style={{color:'black'}}>{movieInfo.original_language}</span></p>
                                <p style={{color:'#666666', margin:0}}>Production companies: <span style={{color:'black'}}>
                                    {movieInfo.production_companies ? movieInfo.production_companies.map((comp, index)=>{
                                            if(index+1!==movieInfo.production_companies.length)
                                                return <><br></br><a key={index} style={{marginLeft:25}} href={`/company/${comp.id}`} key={index}>{comp.name + ', '}</a></>
                                            else
                                                return <><br></br><a key={index} style={{marginLeft:25}} href={`/company/${comp.id}`} key={index}>{comp.name}</a></>
                                        }):
                                        <>
                                        There is no companies
                                        </>
                                        }
                                </span></p>
                                <hr></hr>
                                <div className="credits mt-4">
                                    <h3>Cast</h3>
                                    <p>Credited cast, sorted by TMDb STARmeter:</p>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th scope='col-8'>Actor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cast.map((actor, index)=>{
                                                if(index<10)
                                                    return (
                                                        <>
                                                            <tr key={index}>
                                                                <th><img style={{height:100,marginRight:25}} src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}/><a href={`/actor/${actor.id}`}>{actor.name}</a></th>
                                                            </tr>
                                                        </>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                                <hr></hr>
                                { similar && similar.results.length!==0 ? 
                                <>
                                <h3>Movies like this one:</h3>
                                    <div className='lists'>
                                        <MovieList movies={similar}/>             
                                    </div>
                                </>
                                :
                                <>
                                </>
                                }   
                                <hr></hr>
                                <div className="user-reviews">
                                <h3>User reviews:</h3>
                                    {reviews && reviews.length!==0 ? 
                                        <>
                                            <Reviews reviews={reviews}/>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MoviePage