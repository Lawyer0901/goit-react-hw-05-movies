import { useState, useEffect } from 'react';
import { getCastById } from 'services/API';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const { moviesId } = useParams();
  console.log(moviesId);

  useEffect(() => {
    getCastById(moviesId).then(({ data }) => setMovie(data));
  }, [moviesId]);
  console.log(movie);
  return <div>1</div>;
};
export default Cast;
