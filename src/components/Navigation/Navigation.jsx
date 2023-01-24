import { Outlet } from 'react-router-dom';
import { NavList, NavItem, Link } from '../Navigation/Navigation.styled';
import { ImFilm, ImHome } from 'react-icons/im';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavList>
          <NavItem>
            <Link to="/">
              <ImHome />
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/movies">
              <ImFilm />
              Movies
            </Link>
          </NavItem>
        </NavList>
      </nav>
      <Outlet />
    </>
  );
};
export default Navigation;
