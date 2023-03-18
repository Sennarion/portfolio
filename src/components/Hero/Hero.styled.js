import styled from "styled-components";
import { keyframes } from "styled-components";

const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const Section = styled.div`
  height: 100vh;
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
  flex-direction: column;
  gap: 30px;
`;

export const RightSide = styled.div`
  /* padding-top: 100px; */
  position: relative;
  width: 60%;
  height: 800px;
  cursor: grab;

  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 60%;
    transform: translateX(-50%);

    width: 300px;
    height: 300px;
    border-radius: 100px 50px;
    background: rgb(71, 85, 234);
    background: linear-gradient(
      45deg,
      rgba(71, 85, 234, 1) 0%,
      rgba(0, 208, 80, 1) 27%,
      rgba(228, 255, 0, 1) 70%,
      rgba(228, 255, 0, 1) 100%
    );
  }
`;

export const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
`;

export const TitleAccent = styled.span`
  background-image: linear-gradient(
    -225deg,
    #0887ff 0%,
    #ff2b44 39%,
    #93f53d 67%,
    #e4ff00 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${textclip} 3s linear infinite reverse;
`;
