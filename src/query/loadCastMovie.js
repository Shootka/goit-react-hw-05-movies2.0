import axios from 'axios';
import { key } from '../static/static';

export const loadCastMovie = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
};

