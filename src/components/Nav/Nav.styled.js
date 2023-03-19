import styled from "styled-components";

export const NavWrapper = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const NavItem = styled.li``;

export const NavButton = styled.button`
  background: none;
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing(2)};
  transition: color ${({ theme }) => theme.animation.cubicBezier},
    text-shadow ${({ theme }) => theme.animation.cubicBezier};
  color: inherit;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
