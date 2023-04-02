import React from 'react';

import video1 from '../../assets/images/video1.svg';
import video2 from '../../assets/images/video2.svg';
import unsaved from '../../assets/saved.svg';
import saved from '../../../assets/unsaved.svg'
import movie from '../../assets/shape2.svg';
import { useSelector, useDispatch } from 'react-redux';

import { updateBookmarkStatus } from '../../store/actions/moviesActions';
import { movieSlice } from '../../store/reducers/moviesReducer';
import './Movies.scss';


const Movies = ({movies}) => {

  const dispatch = useDispatch();
  


  const moviess = useSelector(state => state.movies);
  // console.log(moviess);

  const saveHandle = (id,isBookmarked) => {
    // dispatch(updateBookmarkStatus(id,isBookmarked));
    // console.log(id,isBookmarked);
    dispatch(movieSlice.actions.toggleBookmark({ id: id , isBookmarked:isBookmarked }));



  }
    

  return (
    <div className="Movies">
          {/* <h3 className='title'>Recommended for you</h3> */}
        <div className="boxes">
           {
            movies && movies.map((el,id) => {
              // console.log(el.isBookmarked)
                return(
                    <div key={el.id} className="movie">
                      <img src={el?.thumbnail?.regular?.large} alt="" />
                      <img 
                      onClick={ () => saveHandle(el.id, el.isBookmarked)} 
                      src={el.isBookmarked ? saved : unsaved} 
                      alt="" 
                      className='saved'
                      />
                      <div className="movieinfo">
                          <span className='year'>2019</span>
                          <span  className='circle'></span>
                          <img className='movieimg' src={movie} alt="" />
                          <span className='videotype'>{el.title}</span>
                          <span>E</span>
                      </div>
                      <p className='movieName'>The Great Lands</p>
                  </div>
                )
            })
           }
        </div>
    </div>
  )
}
export default Movies;