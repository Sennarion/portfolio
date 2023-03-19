import styled from "styled-components";

export const ListItem = styled.li`
  position: relative;
  width: calc((100% - 80px) / 3);
  height: 300px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  -webkit-box-shadow: ${({ theme }) => theme.shadows.secondaryShadow};
  -moz-box-shadow: ${({ theme }) => theme.shadows.secondaryShadow};
  box-shadow: ${({ theme }) => theme.shadows.secondaryShadow};
  transition: background-color ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ListItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: transform ${({ theme }) => theme.animation.cubicBezier};

  ${ListItem}:hover & {
    transform: translate(-10px, -10px);
  }
`;

export const ListItemContent = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(8)};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.animation.cubicBezier};
  background: ${({ theme }) => theme.colors.projectGradient};

  ${ListItem}:hover & {
    opacity: 1;
  }
`;

export const ListItemTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;

export const ListItemDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
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
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: background-color ${({ theme }) => theme.animation.cubicBezier};
  border-radius: ${({ theme }) => theme.spacing(3)}
    ${({ theme }) => theme.spacing(1)};

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
