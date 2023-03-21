import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const List = styled.ul`
  width: 50%;
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
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const Cloud = styled.div`
  width: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(5)};
`;
