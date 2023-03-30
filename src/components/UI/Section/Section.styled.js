import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing(20)} 0;
`;
