import styled, { keyframes } from "styled-components";

const spinning = keyframes`
0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.bgGradient};
  z-index: 1000;
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: ${({ theme }) => theme.spacing(2)};
    border: 32px solid;
    border-color: ${({ theme }) => theme.colors.primary} transparent
      ${({ theme }) => theme.colors.primary} transparent;
    animation: ${spinning} 1.2s infinite;
  }
`;
