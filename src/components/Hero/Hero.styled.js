import styled, { keyframes } from "styled-components";

const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const RightSide = styled.div`
  position: relative;
  width: 60%;
  height: ${({ theme }) => theme.spacing(200)};
  cursor: grab;

  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 30%;
    width: ${({ theme }) => theme.spacing(80)};
    height: ${({ theme }) => theme.spacing(80)};
    border-radius: ${({ theme }) => theme.spacing(20)}
      ${({ theme }) => theme.spacing(10)};
    background: ${({ theme }) => theme.colors.primaryGradient};
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.max};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Subtitle = styled.p``;

export const TitleAccent = styled.span`
  background-image: ${({ theme }) => theme.colors.secondaryGradient};
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 3s linear infinite reverse;
`;
