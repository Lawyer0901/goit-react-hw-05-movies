import { useState, useEffect } from 'react';
import { getMovieById } from 'services/API';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Image,
  Text,
  Wraper,
  Information,
} from './MovieDetail.styled';
const MovieDetail = () => {
  const location = useLocation();
  // console.log(location);
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
  const NO_IMG =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return (
    <>
      <Container>
        <div>
          <button
            onClick={() => navigate(location.state?.from || '/')}
            type="button"
          >
            go back
          </button>
          <Image src={backdrop_path ? image : NO_IMG} alt={original_title} />
        </div>
        <div>
          <Text>
            <Information>Movie title:</Information> {title}
          </Text>
          <Text>
            <Information>Movie status:</Information> {status}
          </Text>
          <Text>
            <Information>Rating:</Information> {vote_average}
          </Text>
          <Text>
            <Information>About movie:</Information> {overview}
          </Text>
        </div>
      </Container>
      <Container>
        <Link to="cast" state={location.state}>
          Cast
        </Link>
        <br />
        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </Container>
      <Wraper>
        <Outlet />
      </Wraper>
    </>
  );
};

export default MovieDetail;
