import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const MovieItemLink = styled(Link)`
  display: inline-block;
   transition: transform 0.4s ease-in-out;
  &:hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
`;

export const MovieItem = styled.li`
  list-style: none;
`;
