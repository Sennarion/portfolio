import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 1000px;
  width: 100%;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
  width: 50%;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: "Kaushan Script", cursive;
  font-size: 48px;
  line-height: 1.6;
  color: #fff;
`;
