import styled from "styled-components";
import bg from "../../assets/bg.jpg";

export const Section = styled.section`
  height: 100vh;
  padding-top: 60px;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LeftSide = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
  margin-top: 300px;
  position: relative;
  width: 60%;
  height: 800px;

  &::before {
    content: "";
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: url(${bg});
    background-position: center;
    background-size: cover;
  }
`;

export const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const TitleAccent = styled.span`
  color: #76d904;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
`;
