import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;
