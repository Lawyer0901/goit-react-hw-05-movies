import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/API';
import { Link } from 'components/Navigation/Navigation.styled';
import HomeFilmList from 'components/HomeFilmList/HomeFilmList';
import { ListItem, Title } from './Home.styled';
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
      <Title>Trends for week</Title>
      {movies && (
        <HomeFilmList>
          {movies.map(({ id, title }) => (
            <ListItem key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </ListItem>
          ))}
        </HomeFilmList>
      )}
    </>
  );
};

export default Home;
