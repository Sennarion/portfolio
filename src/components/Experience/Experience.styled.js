import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  padding: ${({ theme }) => theme.spacing(6)};

  &:not(:last-of-type) {
    border-bottom: 2px dotted ${({ theme }) => theme.colors.secondaryGrey};
  }
`;

export const Title = styled.h3``;

export const Description = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ResponsibilitiesList = styled.ul`
  list-style: inside;
`;

export const ResponsibilitiesItem = styled.li``;

export const Info = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  font-style: italic;
`;

export const Achievement = styled.p``;
