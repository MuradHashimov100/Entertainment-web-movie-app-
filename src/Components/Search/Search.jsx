import { useEffect, useState } from 'react';

import './Search.scss';
import searchIcon from '../../assets/search.svg';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovies } from '../../store/actions/searchAction';
    
    const Search = ({onInputChange}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    // const searchResults = useSelector( state => state.search.searchResults);

    useEffect(() => {
      dispatch(searchMovies(searchTerm));

    },[searchTerm]);



  // console.log(searchResults);
      return (
        <form action="" className='search-form'>
              <label 
              htmlFor="seach"
              >
                {/* search button */}
                <img src={searchIcon} alt="" />
            </label>
            <input 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onInputChange(e.target.value);
            }}
            name='search' 
            type="text" 
            className='search-input' 
            placeholder='Search for movies or TV series' />
        </form>
      )
    }
    
    export default Search;