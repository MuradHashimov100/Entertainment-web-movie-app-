import { useState } from 'react'
import reactLogo from './assets/react.svg';
import Home from './Pages/Home/Home';
import MoviesPage from './Pages/Movies/MoviesPage';
import TvSeries from './Pages/TV Series/Tvseries';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Saved from './Pages/Saveds/Saved';
const  App =  () =>  {

  return (
    <div className="App">
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<MoviesPage />} />
        <Route path="/Tvseries" element={<TvSeries />} />
        <Route path='/Saved' element={<Saved/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
