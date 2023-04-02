import React from 'react';
import './Navbar.scss';

import Movie from '../../assets/Movie.svg';
import Shape from '../../assets/Shape.svg';
import Shape2 from '../../assets/Shape2.svg';
import TV from '../../assets/tv.svg';
import BookMark from '../../assets/bookmark.svg';
import userProf from '../../assets/userProf.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='menu'>
       <Link to={'/'}><img src={Movie} alt="" className='logo' /></Link>
        <ul className="nav-links">
        <li>
            <a href="">
            <img src={Shape} alt="" />
            </a>
        </li>
        <li>
            <Link to={'/Movies'}><img src={Shape2} alt="" /></Link>
        </li>
        <li>
            <Link to={'/Tvseries'}><img src={TV} alt="" /></Link>
        </li>
        <li>
            <Link to={'/Saved'}><img src={BookMark} alt="" /></Link>
        </li>
        </ul>
        <img src={userProf} alt=""  className='profil'/>
    </nav>
  )
}

export default Navbar