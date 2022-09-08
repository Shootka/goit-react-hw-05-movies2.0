import axios from 'axios';
import {key} from '../static/static'
export const loadTrendingMovie = () => {
 return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
}
