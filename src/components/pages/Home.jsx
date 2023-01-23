// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { KEY } from '../constanses/constances';
import axios from 'axios';

const Home = ({ movies }) => {
  //   const [render, setRender] = useState([]);

  useEffect(() => {
    return async function fetchImages() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
      );
      console.log(response);
      if (response.status === 200) {
        return response.data;
      }
    };
  }, []);
  //   console.log(render);
  return (
    <>
      <ul>
        <li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            omnis doloremque nostrum, eaque dignissimos reprehenderit animi
            eveniet provident consequatur delectus, sed alias veritatis. Libero,
            tempora exercitationem laudantium totam aperiam officiis?
          </p>
        </li>
      </ul>
    </>
  );
};

export default Home;
