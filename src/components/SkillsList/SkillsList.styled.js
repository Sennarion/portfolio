import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 60px) / 4);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(3)}
    ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(5)};
`;
