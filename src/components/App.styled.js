import styled from "styled-components";
import bg from "../assets/bg.jpg";

export const Wrapper = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: url(${bg});
  background-position: center;
  background-size: cover;
`;
