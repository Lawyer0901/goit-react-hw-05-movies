import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './Navigation/Navigation';
import Movies from './pages/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigation />}>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
