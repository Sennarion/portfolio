import { Container, Nav } from "~/components";
import useMediaQuery from "~/hooks/useMediaQuery";
import { theme } from "~/styles/theme";
import { StyledHeader, HeaderContent, Logo, Burger } from "./Header.styled";
import { IoMenuOutline } from "react-icons/io5";

export default function Header({
  scrollTo,
  homeSection,
  aboutMeSection,
  projectsSection,
  skillsSection,
  toggleMenu,
}) {
  const isTablet = useMediaQuery(`(min-width: ${theme.media.tablet})`);

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo onClick={() => scrollTo(homeSection)}>SR</Logo>
          {isTablet ? (
            <Nav
              scrollTo={scrollTo}
              homeSection={homeSection}
              aboutMeSection={aboutMeSection}
              projectsSection={projectsSection}
              skillsSection={skillsSection}
            />
          ) : (
            <Burger onClick={toggleMenu}>
              <IoMenuOutline size={20} />
            </Burger>
          )}
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}
