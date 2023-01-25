import { useState, useEffect } from 'react';
import { getCastById } from 'services/API';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movie, setMovie] = useState(null);
  const { moviesId } = useParams();
  console.log(moviesId);
  useEffect(() => {
    getCastById(moviesId).then(
      data => setMovie(data)
      // console.log(data);
    );
  }, [moviesId]);
  // console.log(movie);

  if (movie === null) {
    return;
  }
  console.log(movie);

  // const { profile_path, character, name } = movie;
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <ul>
        {movie.cast.map(({ profile_path, character, name }) => (
          <li key={name}>
            <img src={IMG_PATH + profile_path} alt={name} />
            <p>Actor: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
