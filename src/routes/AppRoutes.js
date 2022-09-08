import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Reviews from '../components/Reviews/Reviews';
import Cast from '../components/Cast/Cast';
import Movies from '../components/Movies/Movies';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/:movieId' element={<MovieDetails />}>
        <Route path='/movies/:movieId/cast' element={<Cast />} />
        <Route path='/movies/:movieId/reviews' element={<Reviews />} />
      </Route>
      <Route path='*' element={<Home />} />
    </Routes>
  );
};


export default AppRoutes;
