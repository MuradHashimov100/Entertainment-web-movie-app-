import { useState, useEffect } from 'react';
import Data from '../../../data.json';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAllMovies } from '../../store/actions/moviesActions';

import './trend.scss';
import Trend1 from '../../assets/Trend1.svg';
import saved from '../../assets/saved.svg';
import movie from '../../assets/shape2.svg';

import { Swiper, SwiperSlide } from "swiper/react";

// console.log(Data);


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "../../assets/SwiperJs/swipper.css";

// import required modules
import { Pagination } from "swiper";




const Trend = () => {
 const dispatch = useDispatch();
 const { isLoading, error, movies } = useSelector(state => state.movies);
 useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  return (
    <>
    <div className="trends">
            <h4>Trending</h4>
            <div className="trend-box">
               {isLoading ? <div>Isloading</div> :     <Swiper
                breakpoints={{
                    0:{slidesPerView:1.3},
                    576:  { slidesPerView:2},
                    1069: {slidesPerView: 3},
                    1300: {slidesPerView: 4}
                }}
                  spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                autoplay={
                    {
                        delay:500,
                        disableOnInteraction:false
                    }
                }
                className="mySwiper"
                >
                {
                    movies?.filter((movie) => movie.isTrending).map((el,id) => {
                        return   <SwiperSlide key={id}>
                        <div className="trend-card" >
                            <div className="trendimg">
                                <img className='trend-img' src={el && el.thumbnail?.trending?.large} alt="" />
                            </div>
                            <img src={saved} className='saved' alt=""/>
                            <div className="movieinfo">
                                <span className='year'>2019</span>
                                <span  className='circle'></span>
                                <img className='movieimg' src={movie} alt="" />
                                <span className='videotype'>Movie</span>
                                <span  className='circle'></span>
                                <span className='company'>PG</span>
                            </div>
                            <h4 className='movieName'>{el.title}</h4>
                        </div>
               </SwiperSlide>
                    })
                }
            </Swiper> }
        </div>
    </div>
    </>
  )
}

export default Trend;