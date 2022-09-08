import axios from 'axios';
import { key } from '../static/static';

export const loadReviewsMovie  = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
}
