import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  70% { transform: translate(-50%, 0%); }
  80% { transform: translate(-50%, -15%); }
  90% { transform: translate(-50%, 0%); }
  95% { transform: translate(-50%, -7%); }
  97% { transform: translate(-50%, 0%); }
  99% { transform: translate(-50%, -3%); }
  100% { transform: translate(-50%, 0); }
`;

export const MouseContainer = styled.div`
  display: none;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    display: block;
  }
`;
