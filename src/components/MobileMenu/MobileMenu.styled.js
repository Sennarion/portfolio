import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Menu = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background: ${({ theme }) => theme.colors.bgGradient};
  z-index: 200;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

  transition: opacity ${({ theme }) => theme.animation.cubicBezier};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LinksItem = styled.li``;

export const NavLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  text-align: center;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
