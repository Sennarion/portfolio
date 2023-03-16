import { Container, Nav } from "../";
import { StyledHeader, HeaderContent } from "./Header.styled";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <a href="#home">
            <img src={logo} alt="" width="40" />
          </a>
          <Nav />
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}
