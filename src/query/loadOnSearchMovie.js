
import axios from 'axios';
import { key } from '../static/static';

export const loadOnSearchMovie  = (query) => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`)
}


