import { Sling as Hamburger } from 'hamburger-react';
import { Container, Nav } from '~/components';
import useMediaQuery from '~/hooks/useMediaQuery';
import { theme } from '~/styles/theme';
import { StyledHeader, HeaderContent, Logo } from './Header.styled';

export default function Header({
  scrollTo,
  homeSection,
  aboutMeSection,
  projectsSection,
  skillsSection,
  toggleMenu,
  isMenuOpen
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
            <Hamburger
              size={20}
              toggled={isMenuOpen}
              onToggle={toggleMenu}
              color={theme.colors.primary}
              rounded
            />
          )}
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}
