import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 60px) / 4);
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #fff;
  border-radius: 12px 4px;

  /* height: 80px; */
  padding: 20px;
`;
