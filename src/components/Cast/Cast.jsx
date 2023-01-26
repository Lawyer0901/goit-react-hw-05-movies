import { useState, useEffect } from 'react';
import { getCastById } from 'services/API';
import { useParams } from 'react-router-dom';
import { CastList, CastItem, CastImg } from './Cast.styled';

const Cast = () => {
  const [movie, setMovie] = useState(null);
  const { moviesId } = useParams();
  // console.log(moviesId);
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
  // console.log(movie);

  // const { profile_path, character, name } = movie;
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  const NO_IMG =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return movie.cast.length ? (
    <>
      <CastList>
        {movie.cast.map(({ profile_path, character, name }) => (
          <CastItem key={name}>
            <CastImg
              src={!profile_path ? NO_IMG : IMG_PATH + profile_path}
              alt={name}
            />
            <p>Actor: {name}</p>
            <p>Character: {character}</p>
          </CastItem>
        ))}
      </CastList>
    </>
  ) : (
    <p>Sorry there is no information</p>
  );
};

export default Cast;
