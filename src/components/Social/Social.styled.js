import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0% { fill: #f2f2f2; transform: scale(1); }
  5% { fill: #e4ff00; transform: scale(1.2);}
  10% { fill: #f2f2f2; transform: scale(1);}
`;

export const Icons = styled.div`
  position: fixed;
  right: 30px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &:hover,
  &:focus {
    svg {
      animation: none;
    }
  }
`;

export const Link = styled.a`
  cursor: pointer;
  transition: transform 0.2s linear;

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
    transition: fill 0.2s linear;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);

    svg {
      fill: #e4ff00;
    }
  }
`;
