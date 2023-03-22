import styled from "styled-components";
import { Link } from "react-scroll";

export const Menu = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background: ${({ theme }) => theme.colors.bgGradient};
  z-index: 200;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LinksItem = styled.li``;

export const StyledLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  text-align: center;
`;
