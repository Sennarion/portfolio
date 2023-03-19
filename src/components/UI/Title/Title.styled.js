import styled from "styled-components";

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  color: ${({ theme }) => theme.colors.primary};
`;
