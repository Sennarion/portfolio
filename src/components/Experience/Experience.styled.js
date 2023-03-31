import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  padding: ${({ theme }) => theme.spacing(4)};

  &:not(:last-of-type) {
    border-bottom: 1px dotted ${({ theme }) => theme.colors.white};
  }
`;

export const Title = styled.h3``;

export const Description = styled.div``;

export const ResponsibilitiesList = styled.ul``;

export const ResponsibilitiesItem = styled.li``;

export const Info = styled.p``;
