import styled, { keyframes } from "styled-components";

const fade = ({ theme }) => keyframes`
  0% { fill: ${theme.colors.textColor}; transform: scale(1); }
  5% { fill: ${theme.colors.primary}; transform: scale(1.2);}
  10% { fill: ${theme.colors.textColor}; transform: scale(1);}
`;

export const Icons = styled.div`
  display: none;
  position: fixed;
  right: 30px;
  bottom: 40px;
  gap: ${({ theme }) => theme.spacing(5)};

  &:hover,
  &:focus {
    svg {
      animation: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Link = styled.a`
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
