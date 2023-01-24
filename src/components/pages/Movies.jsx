import { ImSearch } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
const Movies = () => {
  return (
    <>
      <>
        <form action="">
          <label htmlFor="">
            Search movie
            <input type="text" /> <ImSearch />
          </label>
        </form>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          quidem distinctio. In cum quod aut dolor unde totam earum, temporibus
          quos reiciendis quidem exercitationem laborum, nostrum harum quae vel
          fugit.
        </p>
      </>
      <Outlet />
    </>
  );
};

export default Movies;
