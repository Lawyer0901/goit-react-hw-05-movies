import { useState, useEffect } from 'react';
import { getMovieById } from 'services/API';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
const MovieDetail = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
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
        <button onClick={() => navigate(location.state?.from)} type="button">
          go back
        </button>
        <p>{title}</p>
        <p>{status}</p>
        <p>{vote_average}</p>
        <p>{overview}</p>
      </div>
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <br />
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>

      <Outlet />
    </>
  );
};

export default MovieDetail;
