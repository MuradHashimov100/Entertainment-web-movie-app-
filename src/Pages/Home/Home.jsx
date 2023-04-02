import { Fragment, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Movies from '../../Components/Recomends/Movies';
import Search from '../../Components/Search/Search';
import Trend from '../../Components/Trends/Trend';
import './Home.scss';
import '../../Sass/main.scss';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../store/actions/moviesActions';
import { searchMovies } from '../../store/actions/searchAction';


const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, movies } = useSelector(state => state.movies);
  const searchResults = useSelector( state => state.search.searchResults);
  
const test = useSelector(state => state)
// console.log(test)
  useEffect(() => {
     dispatch(fetchAllMovies());
   }, [dispatch]);

  //  console.log(movies);
  return (
    <div className="main-grid">
        <div className="grid1">
            <Navbar/>
          </div>
        <div className="grid2">
        <Search/>
          {
            searchResults ? 
            <>
            <Trend/>
            <Movies
            movies={searchResults}
          />
            </>
            : null
          }

        </div>
        
    </div>
   
  )
}

export default Home;