import React, {useEffect,useState} from 'react';
import MovieList from '../MovieListArea/MovieList'
import MovieListHeading from '../MovieListArea/MovieListHeading';
import SearchBox from '../Search/SearchBox';
import AddFavourites from '../MovieListArea/AddFavourites';
import RemoveFavourites from '../MovieListArea/RemoveFavourites';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import MovieData from '../MovieData';
import TMBD from '../../TMBD'
function Home(){
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [featuredData, setFeaturedData] = useState(null);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  useEffect(()=>{
    const loadAll = async () => {
      let list = await TMBD.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await TMBD.getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo)
      setFeaturedData(chosenInfo)
    }
    loadAll()
    
  },[])

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    setFavourites(movieFavourites);
  },[])

    return(
        <div className='home'>
            {featuredData &&
                <FeaturedMovie item = {featuredData}/>
            }
            <section className='lists'>
              {movieList.map((item, key)=>(
                <MovieList key={key} heading = {item.title} movies = {item.items}/>
              ))}
            </section>
        </div>
    )
}
export default Home