import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: "Nunito", sans-serif;

  font-size: 42px;
  margin-bottom: 40px;
  color: #e4ff00;
`;
