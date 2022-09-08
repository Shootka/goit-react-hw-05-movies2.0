import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { loadTrendingMovie } from '../../query/loadTrendingMovie';

const Home = () => {
  useEffect(() => {
  loadTrendingMovie()
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
