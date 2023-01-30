// import { ImSearch } from 'react-icons/im';
import { FcCollect } from 'react-icons/fc';
import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getSearchMovie } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MovieList,
  MovieItemLink,
  MovieItem,
  Form,
  Input,
  FormButton,
} from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState(null);
  // const [submit, setSubmit] = useState('');

  const movieName = searchParams.get('query');

  useEffect(() => {
    if (movieName === '' || movieName === null) return;

    async function getMovie() {
      const response = await getSearchMovie(movieName);
      setMovie(response);
      console.log(response);
    }
    getMovie();
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="enter movie" />
        <FormButton onSubmit={handleSubmit}>
          <FcCollect /> Search
        </FormButton>
      </Form>

      <MovieList>
        {movie &&
          movie.results.map(({ id, original_title }) => (
            <MovieItem key={id}>
              <MovieItemLink to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </MovieItemLink>
            </MovieItem>
          ))}
      </MovieList>

      <Outlet />
    </>
  );
};

export default Movies;
