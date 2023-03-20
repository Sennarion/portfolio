import { Container, Nav } from "~/components";
import { StyledHeader, HeaderContent, Logo } from "./Header.styled";

export default function Header({
  scrollTo,
  homeSection,
  aboutMeSection,
  projectsSection,
  skillsSection,
}) {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo onClick={() => scrollTo(homeSection)}>SR</Logo>
          <Nav
            scrollTo={scrollTo}
            homeSection={homeSection}
            aboutMeSection={aboutMeSection}
            projectsSection={projectsSection}
            skillsSection={skillsSection}
          />
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}
