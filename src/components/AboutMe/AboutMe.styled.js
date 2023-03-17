import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  padding-top: 80px;
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

export const Avatar = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 160px 80px;
`;

export const RightSide = styled.div`
  width: 60%;
`;
