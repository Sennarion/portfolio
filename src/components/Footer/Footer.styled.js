import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.spacing(6)} 0;
  background: ${({ theme }) => theme.colors.grey};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;
