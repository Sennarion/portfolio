import styled, { keyframes } from 'styled-components';

const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
    min-height: auto;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 40%;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  position: relative;
  height: 200px;
  cursor: grab;

  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: 30%;
    width: ${({ theme }) => theme.spacing(60)};
    height: ${({ theme }) => theme.spacing(60)};
    border-radius: ${({ theme }) => theme.radius(6)};
    transform: translate(0, 0);
    background: ${({ theme }) => theme.colors.primaryGradient};

    @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
      width: ${({ theme }) => theme.spacing(80)};
      height: ${({ theme }) => theme.spacing(80)};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 60%;
    height: ${({ theme }) => theme.spacing(200)};
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.max};
  }
`;

export const Subtitle = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const TitleAccent = styled.span`
  background-image: ${({ theme }) => theme.colors.secondaryGradient};
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 3s linear infinite reverse;
`;
