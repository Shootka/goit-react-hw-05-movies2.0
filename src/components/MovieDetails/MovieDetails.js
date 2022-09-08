import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './styles/MovieDetails.css';
import { loadDetailsMovie } from '../../query/loadDetailsMovie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});
  const navigation = useNavigate();
  useEffect(() => {
    loadDetailsMovie(movieId)
      .then(r => setCurrentMovie(r.data));
  }, [movieId]);
  return (
    <div>
      <button onClick={() => navigation('/')}>back</button>
      <div className={'details-card'}>
        <img src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`} className={'poster'} alt='poster' />
        <div>
          <p><span className={'marker'}>Title: {currentMovie.title} {currentMovie.release_date?.slice(0, 4)}</span></p>
          <p><span className={'marker'}>Tag: </span><span className={'text tag'}>{currentMovie.tagline} </span></p>
          <ul><span className={'marker-light'}>
            Genres:</span>
            {currentMovie.genres?.map((gen) => {
              return <li key={gen.id}>{gen.name}</li>;
            })}
          </ul>
          <p><span className={'marker'}>Overview: </span> <span className={'text'}>{currentMovie.overview}</span></p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
