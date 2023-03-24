import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(10)} 0;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    height: 100vh;
    scroll-snap-align: center;
    padding: ${({ theme }) => theme.spacing(20)} 0;
  }
`;
