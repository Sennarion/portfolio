import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.media.desktop};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing(5)};
`;
