import styled from 'styled-components';

export const ListItem = styled.li`
  list-style: none;
  width: 200px;
  /* margin-bottom: 10px; */
  transition: transform 1s ease-in-out;
  &:hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  margin-left: 35px;
  color: ${p => p.theme.colors.text};
`;
