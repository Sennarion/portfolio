import styled from "styled-components";

export const NavWrapper = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavItem = styled.li``;

export const NavButton = styled.button`
  background: none;
  text-transform: uppercase;
  padding: 8px;
  transition: color 0.2s linear, text-shadow 0.2s linear;
  color: inherit;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #e4ff00;
    text-shadow: 0px 0px 6px #e4ff00;
  }
`;
