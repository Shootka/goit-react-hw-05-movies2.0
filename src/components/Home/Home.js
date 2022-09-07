import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export const key = 'a75b50598b3600add1a9e8ed401b876c';
const Home = () => {
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
      .then(r => {
        setTrending(r.data.results);
      });
  }, []);

  const [trending, setTrending] = useState([]);
  return (
    <>
      Trending films:
      <ul>
        {trending?.map((trend) => {
          return <li key={trend.id}>
            <NavLink to={`/movies/${trend.id}`}>{trend?.original_title}</NavLink>
          </li>;
        })}
      </ul>
    </>
  );
};

Home.propTypes = {};

export default Home;
