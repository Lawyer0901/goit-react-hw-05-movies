import { useState, useEffect } from 'react';
import { getMovieById } from 'services/API';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const MovieDetail = () => {
  const { moviesId } = useParams();
  // console.log(moviesId);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getMovieById(moviesId).then(data => setMovie(data));
  }, [moviesId]);
  // console.log(movie);

  const {
    original_title,
    backdrop_path,
    title,
    status,
    vote_average,
    overview,
  } = movie;
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  let image = IMG_PATH + backdrop_path;
  return (
    <>
      <div>
        <img src={image} alt={original_title} />
        <p>{title}</p>
        <p>{status}</p>
        <p>{vote_average}</p>
        <p>{overview}</p>
      </div>
      <Link to="cast">Cast</Link>
      <br />
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </>
  );
};

export default MovieDetail;
