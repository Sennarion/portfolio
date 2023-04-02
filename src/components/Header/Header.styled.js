import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.spacing(20)};
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.secondaryGrey};
  backdrop-filter: blur(5px);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.default};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
