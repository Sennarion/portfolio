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
  MobileMenu,
  Loader
} from '~/components';
import { GlobalStyleComponent } from '~/styles/GlobalStyles.styled';

export default function App() {
  const isTablet = useMediaQuery(`(min-width: ${theme.media.tablet})`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isTablet) {
      setIsMenuOpen(false);
    }
  }, [isTablet]);

  useEffect(() => {
    if (isMenuOpen || isLoading) {
      document.documentElement.style.overflow = 'hidden';
      return;
    }

    document.documentElement.style.overflow = 'auto';
  }, [isMenuOpen, isLoading]);

  return (
    <>
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <main>
        <Hero />
        <AboutMe />
        <SkillsList />
        <ProjectsList />
      </main>
      <Footer />
      <Loader isLoading={isLoading} />
      <MobileMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
      <GlobalStyleComponent />
    </>
  );
}
