import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

export const NavItem = styled.li`
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing(2)};
  transition: color ${({ theme }) => theme.animation.cubicBezier},
    text-shadow ${({ theme }) => theme.animation.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
