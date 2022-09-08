import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadCastMovie } from '../../query/loadCastMovie';
import './style/Cast.css'

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([])
  useEffect(() => {
    loadCastMovie(movieId)
      .then(r => {
        setCast(r.data?.cast);
      })
  }, [movieId]);
  return (
    <div>
      {cast.map(({ id, name, profile_path, character }) => {
        return <div key={id * Math.random()}>
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} className={'photo-cast'} alt='cast-img' />
          <p>Character: {character}</p>
          <p>Real name: {name}</p>
        </div>
      })}
    </div>
  );
};

export default Cast;
