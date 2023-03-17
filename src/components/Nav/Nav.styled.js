import styled from "styled-components";

export const NavWrapper = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  text-transform: uppercase;
  padding: 8px;
  transition: color 0.2s linear;

  &:hover,
  &:focus {
    color: #e4ff00;
  }
`;
