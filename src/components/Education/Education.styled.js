import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  padding: ${({ theme }) => theme.spacing(6)};

  &:not(:last-of-type) {
    border-bottom: 1px dotted ${({ theme }) => theme.colors.white};
  }
`;

export const Title = styled.h3``;

export const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Info = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  font-style: italic;
`;

export const LinkWrapper = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Link = styled.a`
  text-decoration: underline;
  transition: color ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
