import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineStar } from 'react-icons/ai'
import { BiMessageAltAdd, BiShareAlt } from 'react-icons/bi'
import TMBD from '../../TMBD';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
function Movies(){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const getTop = async () =>{
            let top = await TMBD.getTopRatedMovies();
            setMovies(top.results);
        }
        getTop();
        
    },[]);

    const genres = ['Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'Film-Noir',
        'History',
        'Horror',
        'Music',
        'Musical',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Short',
        'Sport',
        'Thriller',
        'War',
        'Western',
    ];

    return(
        <>
        <div className='container' style={{background:'white', color:'black', paddingTop:80}}>
            <div className='row mt-4'>
                <div className='col-8'>
                    <div className='row '>
                        <div className='col-10'>
                            <span style={{fontSize:15, color:'gray'}}>TMDb Charts</span>
                            <h4>Most Popular Movies</h4>
                            <p style={{color:'gray'}}>As determined by TMDb Users</p>
                        </div>
                        <div className='share-button col-2 d-flex justify-content-center align-items-center flex-column' >
                            <BiShareAlt/>
                            <p>Share</p>
                        </div>
                    </div>
                   <hr></hr>
                   <div className='d-flex justify-content-between align-items-center'>
                       <p style={{margin:0}}>Showing {movies.length} titles</p> 
                       <div className='d-flex align-items-center justify-content-between'>
                           <p style={{margin:0}}>Sort by</p>
                           <select className='ml-3' name='search' id='search-by'>
                               <option selected value='ranking'>Ranking</option>
                               <option value='tmdb-rate'>TMDb rating</option>
                               <option value='release'>Release date</option>
                               <option value='number'>Number of ratings</option>
                               <option value='your-rate'>Your rating</option>
                           </select>
                           <div className='order-button d-flex align-items-center justify-content-center ml-3 py-1'>
                                <AiOutlineArrowDown/>
                                <AiOutlineArrowUp/>
                            </div>
                       </div>
                   </div>
                   <div className='movieColumn-list'>
                       <Table striped hover>
                           <thead>
                               <tr>
                                   <th scope='col-9'>Rank and title</th>
                                   <th scope='col'>TMDb Rating</th>
                                   <th scope='col'>Your Rating</th>
                                   <th scope='col'></th>
                               </tr>
                           </thead>
                           <tbody>
                               {movies.map((movie, key)=>{
                                   console.log(movie)
                                   return(
                                    <>
                                        <tr key={key}>
                                            <th scope='row'><img style={{height:80,
                                            marginRight:20}} src= {`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/><a href="">{movie.title}</a></th>
                                            <th scope='row'>
                                                <div className='d-flex align-items-center justify-content-center' style={{height:80}}>
                                                    <AiFillStar color='gold'/>
                                                    <p style={{margin:0, marginLeft:5}}>{movie.vote_average}</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='your-rating d-flex align-items-center justify-content-center' style={{height:80}}>
                                                    <AiOutlineStar/>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='add-movie d-flex align-items-center justify-content-center' style={{height:80, cursor:'pointer'}}>
                                                    <BiMessageAltAdd/>
                                                </div>
                                            </th>
                                        </tr>
                                    </>
                                   )
                               })}
                           </tbody>
                       </Table>
                   </div>
                   <hr></hr>
                   <p>Our Most Popular charts use data from the search behavior of IMDb's 
                       more than 250 million monthly unique visitors 
                       to rank the hottest, most buzzed about movies and TV shows.</p>
                </div>
                <div className='col-4'>
                    <h4>You Have Seen</h4>
                    <h4><strong>0</strong>/100 (0%)</h4>
                    <hr></hr>
                    <h4>TMDb Charts</h4>
                    <ul>
                        <li style={{display:'block'}}>
                            <a href=''>Box Office</a>
                        </li>
                        <li style={{display:'block'}}>
                            <a href=''>Most Popular Movies</a>
                        </li>
                        <li style={{display:'block'}}>
                            <a href=''>Top Rated Movies</a>
                        </li>
                        <li style={{display:'block'}}>
                            <a href=''>Top Rated English Movies</a>
                        </li>
                        <li style={{display:'block'}}>
                            <a href=''>Most Popular TV</a>
                        </li>
                        <li style={{display:'block'}}>
                            <a href=''>Top Rated TV</a>
                        </li>
                        <li style={{display:'block'}}>
                            <a href=''>Top Rated Indian Movies</a>
                        </li>
                        <li style={{display:'block'}}>
                            <a href=''>Lowest Rated Movies</a>
                        </li>
                    </ul>
                    <hr></hr>
                    <h4>Popular Movies by Genre</h4>
                    <ul>
                        {genres.map((genre, key)=>{
                            return(
                                <>
                                    <li style={{display:'block'}}>
                                        <a href=''>{genre}</a>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>   
                <div className="line"></div>
                <div className='my-2 d-flex justify-content-between align-items-center w-100' style={{paddingLeft:15, paddingRight:15}}>
                    <h4 color={'gray'} >Recently Viewed</h4>
                    <a href='' style={{fontSize:15}}>Clear your history</a>
                </div>
            </div> 
        </div>
        </>
    )
}
export default Movies