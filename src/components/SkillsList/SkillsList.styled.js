import styled from 'styled-components';

export const Content = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
