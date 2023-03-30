import styled from 'styled-components';

export const ListItem = styled.li`
  flex-basis: 100%;
  display: flex;
  /* gap: ${({ theme }) => theme.spacing(10)}; */
  /* border-radius: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(5)}; */
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grey};
  border: 2px solid ${({ theme }) => theme.colors.grey};

  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier},
    border ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ListItemContent = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(10)};
`;

export const ListItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing(2)} 0;
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
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.animation.cubicBezier};
  border-radius: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(1)};

  svg {
    fill: ${({ theme }) => theme.colors.grey};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary};

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Image = styled.img`
  width: 30%;
  /* border-radius: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(5)}; */
`;
