import styled from 'styled-components';
const HomeFilmList = ({ children }) => {
  return <FilmList>{children}</FilmList>;
};
export default HomeFilmList;

const FilmList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;
`;
