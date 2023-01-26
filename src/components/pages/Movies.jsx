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
  const [events, setEvents] = useState(null);
  const [value, setValue] = useState('');
  const keyword = searchParams.get('query');
  // console.log(keyword);
  useEffect(() => {
    if (keyword === '') {
      return;
    }
    getSearchMovie(keyword).then(setEvents);
    // getSearchMovie();
  }, [keyword]);
  if (events === null) {
    return;
  }
  // console.log(events);

  const handleSearchMovie = e => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    // handleSearchMovie();

    const form = event.currentTarget;
    console.log(form.query.value);
    if (form.query.value === '' || form.search.value === null) {
      return;
    }
    setSearchParams({ query: form.query.value });

    form.reset();
  };

  // const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
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
        {events.results.map(({ id, original_title }) => (
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
