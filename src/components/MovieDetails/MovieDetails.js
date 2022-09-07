import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const {movieId} = useParams()
  const [currentMovie, setCurrentMovie] = useState({})
  console.log( currentMovie);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a75b50598b3600add1a9e8ed401b876c&language=en-US`)
      .then(r => setCurrentMovie(r.data))
  }, [])
  return (
    <div>
      <img src={currentMovie.poster_path} alt='' />
      <p>Title: {currentMovie.title}</p>
      <p>Tag: {currentMovie.tagline}</p>
      Genres:
      {currentMovie.genres?.map((gen) => {
        return <p key={gen.id}>{gen.name}</p>
      })}
      <p>Overview: {currentMovie.overview}</p>
    </div>
  );
};

MovieDetails.propTypes = {

};

export default MovieDetails;
