import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './Navigation/Navigation';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MovieDetail />}>
            <Route path="/movies/:moviesId/cast" element={<Cast />} />
            <Route path="/movies/:moviesId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
