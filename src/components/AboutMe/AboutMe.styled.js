import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: 42px;
  margin-bottom: 40px;
  color: #e4ff00;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  border-radius: 100px 40px;
  padding: 40px;
`;

export const Avatar = styled.div`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 300px;
  height: 300px;
  border-radius: 100px 40px;
  overflow: hidden;
`;

export const Description = styled.div`
  padding-left: 300px;
  line-height: 1.6;
  margin-bottom: 80px;
`;
