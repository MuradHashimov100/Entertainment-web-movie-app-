import { Fragment, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Movies from '../../Components/Recomends/Movies';
import Search from '../../Components/Search/Search';

import './Movies.scss';
import '../../Sass/main.scss';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../store/actions/moviesActions';
import { searchMovies } from '../../store/actions/searchAction';


const MoviesPage = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector( state => state.search.searchResults);
  // console.log(searchResults)
  const { isLoading, error, movies } = useSelector(state => state.movies);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  
  useEffect(() => {
    const filteredMovies = movies.filter((movie) => movie.category === 'Movie');
    setDisplayedMovies(filteredMovies);
  }, [movies]);



  useEffect(() => {
    if (isSearching) {
      setDisplayedMovies(searchResults);
    } else {
      const filteredMovies = movies.filter((movie) => movie.category === 'Movie');
      setDisplayedMovies(filteredMovies);
    }
  }, [isSearching, movies, searchResults]);
  
  const handleInputChange = event => {
    // debugger;
    const term = event;
    setSearchTerm(term);
    if (term === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);

    }
  };



  //  console.log(movies);
  return (
    <div className="main-grid">
        <div className="grid1">
            <Navbar/>
          </div>
        <div className="grid2">
        <Search  onInputChange={handleInputChange}/>
         <Movies movies={displayedMovies}/>
        </div>
    </div>
   
  )
}

export default MoviesPage