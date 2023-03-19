import styled from "styled-components";
import { keyframes } from "styled-components";

const bounce = keyframes`
  70% { transform: translate(-50%, 0%); }
  80% { transform: translate(-50%, -15%); }
  90% { transform: translate(-50%, 0%); }
  95% { transform: translate(-50%, -7%); }
  97% { transform: translate(-50%, 0%); }
  99% { transform: translate(-50%, -3%); }
  100% { transform: translate(-50%, 0); }
`;

export const Main = styled.main`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MouseContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;
`;

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
`;
