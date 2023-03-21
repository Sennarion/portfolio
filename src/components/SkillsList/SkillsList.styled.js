import styled from "styled-components";

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

export const ListItem = styled.li`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  background: #1a2532;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(5)};
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier},
    border ${({ theme }) => theme.animation.cubicBezier},
    color ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;
