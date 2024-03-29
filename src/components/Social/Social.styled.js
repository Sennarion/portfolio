import styled, { keyframes } from 'styled-components';

const fade = ({ theme }) => keyframes`
  0% { fill: ${theme.colors.textColor}; transform: scale(1); }
  5% { fill: ${theme.colors.primary}; transform: scale(1.2);}
  10% { fill: ${theme.colors.textColor}; transform: scale(1);}
`;

export const Icons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};

  &:hover,
  &:focus {
    svg {
      animation: none;
    }
  }
`;

export const Link = styled.a`
  display: block;
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  transition: transform ${({ theme }) => theme.animation.cubicBezier};

  &:nth-of-type(2) {
    svg {
      animation-delay: 200ms;
    }
  }

  &:nth-of-type(3) {
    svg {
      animation-delay: 400ms;
    }
  }

  svg {
    display: block;
    animation: ${fade} 3s infinite;
    transition: fill ${({ theme }) => theme.animation.cubicBezier},
      filter ${({ theme }) => theme.animation.cubicBezier};
  }

  &:hover,
  &:focus {
    transform: scale(1.2);

    svg {
      fill: ${({ theme }) => theme.colors.primary};
      filter: drop-shadow(0px 0px 2px ${({ theme }) => theme.colors.primary});
    }
  }
`;
