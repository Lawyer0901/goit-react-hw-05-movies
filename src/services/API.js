import { KEY } from 'components/constanses/constances';
import axios from 'axios';
export async function fetchMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  );
  // console.log(response);
  if (response.status === 200) {
    return response.data;
  }
}

export async function getMovieById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
  // console.log(response);
  if (response.status === 200) {
    return response.data;
  }
}

export async function getCastById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  // console.log(response);
  if (response.status === 200) {
    return response.data;
  }
}
