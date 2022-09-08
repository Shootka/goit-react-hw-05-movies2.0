import React, { useState } from 'react';
import { loadOnSearchMovie } from '../../query/loadOnSearchMovie';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('')
  const [searchList, setSearchList] = useState([])

  const onSearch = () => {
    loadOnSearchMovie(query)
      .then(r => {
        setSearchList(r.data.results)
      })
  }
  return (
    <div>
      <input type='text' placeholder={'movie name...'} style={{width: 300}} onChange={(e) => setQuery(e.target.value)}/>
      <button onClick={onSearch}>search</button>
      {searchList.length <= 0 && <div>No films, use search</div>}
      {searchList && <ul>
        {searchList?.map((trend) => {
          return <li key={trend.id}>
            <NavLink to={`/movies/${trend.id}`}>{trend?.original_title}</NavLink>
          </li>;
        })}
      </ul>}
    </div>
  );
};

export default Movies;
