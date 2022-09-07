import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../components/Home/Home';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        {/*<Route path='/movies' element={<Movies/>} />*/}
        {/*<Route path='/movies/:movieId/cast' element={<PageNotFound />}/>*/}
        {/*<Route path='/movies/:movieId/reviews' element={<PageNotFound />}/>*/}
      </Route>
      <Route path='/movies/:movieId' element={<MovieDetails/>} />
    </Routes>
  );
}


export default AppRoutes;
