import { Fragment, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Movies from '../../Components/Recomends/Movies';
import Search from '../../Components/Search/Search';

// import './Movies.scss';
import '../../Sass/main.scss';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../store/actions/moviesActions';
import { fetchMoviesTvseries } from '../../store/actions/moviesActions';
import { searchMovies } from '../../store/actions/searchAction';
import { fetchIsBookmarked } from '../../store/actions/moviesActions';


const Saved = () => {
  const dispatch = useDispatch();

  const { isLoading, error, movies } = useSelector(state => state.movies);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  
  useEffect(() => {
    const filteredMovies = movies.filter((movie) => movie.isBookmarked === true);
    setDisplayedMovies(filteredMovies);
    console.log(filteredMovies);
  }, [movies]);

// console.log(movies.isBookmarked)
  
  const handleInputChange = event => {
    // debugger;
    const term = event;
    setSearchTerm(term);
    if (term === '') {
      setIsSearching(false);
      const filteredMovies = movies.filter((movie) => movie.isBookmarked === true);
      setDisplayedMovies(filteredMovies);

    } else {
      setIsSearching(true);
      const filteredMovies = movies.filter(
        (movie) => movie.category === 'TV Series' && movie.title.toLowerCase().includes(term.toLowerCase()));
      setDisplayedMovies(filteredMovies);
    }
  };



  return (
    <div className="main-grid">
        <div className="grid1">
            <Navbar/>
          </div>
        <div className="grid2">
            <h3>salam Dunya</h3>
        <Search  onInputChange={handleInputChange}/>
         <Movies movies={displayedMovies}/>
        </div>
    </div>
   
  )
}

export default Saved