import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
