import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/API';
import { Link } from 'components/Navigation/Navigation.styled';
const Home = () => {
  //   const [render, setRender] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(({ results }) => setMovies(results));
  }, []);
  // console.log(movies);
  //   console.log(render);
  return (
    <>
      <h2>Trends for week</h2>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
