import { Sling as Hamburger } from 'hamburger-react';
import { Container, Nav } from '~/components';
import useMediaQuery from '~/hooks/useMediaQuery';
import { theme } from '~/styles/theme';
import { StyledHeader, HeaderContent, Logo } from './Header.styled';

export default function Header({ toggleMenu, isMenuOpen }) {
  const isTablet = useMediaQuery(theme.media.tablet);

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo to="home" smooth={true} duration={500}>
            SR
          </Logo>
          {isTablet ? (
            <Nav />
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
