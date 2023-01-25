// import { ImSearch } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSearchMovie } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [events, setEvents] = useState(null);
  const keyword = searchParams.get('query');
  useEffect(() => {
    // if (keyword === '' || keyword === null) {
    //   return;
    // }
    getSearchMovie(keyword).then(setEvents);
  }, [keyword]);
  if (events === null) {
    return;
  }
  console.log(events);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.search.value });
    form.reset();
  };
  // const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Search movie
          <input type="text" name="search" placeholder="enter movie" />
          <button type="button">Search</button>
        </label>
      </form>
      <>
        <ul>
          {events.results.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      </>
      <Outlet />
    </>
  );
};

export default Movies;
