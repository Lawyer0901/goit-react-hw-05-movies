// import { ImSearch } from 'react-icons/im';
import { FcCollect } from 'react-icons/fc';
import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getSearchMovie } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList, MovieItemLink, MovieItem } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [events, setEvents] = useState(false);
  const [valueMovie, setValueMovie] = useState('');
  const [submit, setSubmit] = useState('');
  console.log(searchParams.get('query'));
  // let submit  = searchParams.get('query');
  // console.log(keyword);
  // if (events === []) {
  //   return;
  // }
  const handleSearchMovie = e => {
    setValueMovie(e.target.value);
    console.log('input', e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const { value } = submit;
    setSubmit(valueMovie);
    const form = event.currentTarget;
    // console.log(form.query.value);
    setSearchParams({ query: form.query.value });
    // form.reset();

    // console.log('принимаю submit 2', value);
  };

  // console.log('принимаю submit', value);
  useEffect(() => {
    // if (events === null) {
    //   return;
    // }
    const conGetMovie = async () => {
      const responce = await getSearchMovie(submit);
      console.log(responce);
      setEvents(responce);
    };
    conGetMovie();
  }, [submit]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={valueMovie}
          onChange={handleSearchMovie}
          type="text"
          name="query"
          placeholder="enter movie"
        />
        <button onSubmit={handleSubmit}>
          <FcCollect /> Search
        </button>
      </form>

      <MovieList>
        {events &&
          events.results.map(({ id, original_title }) => (
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
