import axios from 'axios';
import { key } from '../static/static';

export const loadDetailsMovie  = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
}
