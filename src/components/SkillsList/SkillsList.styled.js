import styled from 'styled-components';

export const Content = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const SkillName = styled.h3`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.animation.cubicBezier};

  &::after {
    content: '';
    position: absolute;
    right: 50%;
    margin-right: -10px;
    bottom: -20px;
    border: solid 10px transparent;
    border-left-color: ${({ theme }) => theme.colors.white};
    transform: rotate(90deg);
    z-index: 1;
    transition: border-color ${({ theme }) => theme.animation.cubicBezier};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 30%;
    height: 100%;

    &::after {
      bottom: 50%;
      margin-bottom: -10px;
      right: -10px;
      transform: rotate(0deg);
    }
  }
`;

export const ListItem = styled.li`
  flex-basis: 100%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.grey};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier},
    border ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    ${SkillName} {
      background-color: ${({ theme }) => theme.colors.primary};

      &::after {
        border-left-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const AbilitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(6)};
  list-style: inside;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 70%;
    padding: ${({ theme }) => theme.spacing(10)};
  }
`;

export const AbilitiesItem = styled.li`
  line-height: ${({ theme }) => theme.lineHeight.large};
`;
