import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;
