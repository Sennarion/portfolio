import styled from 'styled-components';

export const ListItem = styled.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grey};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radius(2)};
  overflow: hidden;

  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier},
    border ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  }
`;

export const ListItemContent = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 60%;
    padding: ${({ theme }) => theme.spacing(10)};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 70%;
  }
`;

export const ListItemTitle = styled.h3`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ListItemStack = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  font-style: italic;
`;

export const ListItemDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};
  border-radius: ${({ theme }) => theme.radius(1)};

  svg {
    fill: ${({ theme }) => theme.colors.grey};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 40%;
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 30%;
  }
`;

export const Image = styled.img`
  object-fit: contain;
`;
