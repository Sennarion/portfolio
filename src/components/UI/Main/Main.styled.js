import styled from "styled-components";

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.bgGradient};
  background-attachment: fixed;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
