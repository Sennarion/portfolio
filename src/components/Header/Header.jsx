import { Container, Nav } from "..";
import { StyledHeader, HeaderContent } from "./Header.styled";
import logo from "../../assets/logo.svg";

export default function Header({
  scrollTo,
  homeSection,
  aboutMeSection,
  projectsSection,
  contactsSection,
}) {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <img src={logo} alt="" width="40" />
          <Nav
            scrollTo={scrollTo}
            homeSection={homeSection}
            aboutMeSection={aboutMeSection}
            projectsSection={projectsSection}
            contactsSection={contactsSection}
          />
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}
