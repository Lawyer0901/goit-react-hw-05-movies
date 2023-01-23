import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 15px;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
  &.active {
    background-color: ${p => p.theme.colors.backgroundSecondary};
    color: ${p => p.theme.colors.black};
  }
`;
