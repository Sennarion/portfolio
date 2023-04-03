import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  min-height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
  padding: ${({ theme }) => theme.spacing(20)} 0;
`;
