import { useState, useEffect } from 'react';
import useMediaQuery from '~/hooks/useMediaQuery';
import { theme } from '~/styles/theme';
import {
  Hero,
  Header,
  Footer,
  AboutMe,
  ProjectsList,
  SkillsList,
  Social,
  Main,
  MobileMenu
} from '~/components';
import { GlobalStyleComponent } from '~/styles/GlobalStyles.styled';

export default function App() {
  const isTablet = useMediaQuery(`(min-width: ${theme.media.tablet})`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isTablet) {
      setIsMenuOpen(false);
    }
  }, [isTablet]);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      return;
    }

    document.documentElement.style.overflow = 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Main>
        <Hero />
        <AboutMe />
        <SkillsList />
        <ProjectsList />
        <MobileMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
        {isTablet && <Social />}
      </Main>
      <Footer />
      <GlobalStyleComponent />
    </>
  );
}
