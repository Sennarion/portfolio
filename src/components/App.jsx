import { useState, useRef, useEffect } from 'react';
import useMediaQuery from '~/hooks/useMediaQuery';
import { theme } from '~/styles/theme';
import {
  Hero,
  Header,
  AboutMe,
  ProjectsList,
  SkillsList,
  Social,
  Section,
  Main,
  MobileMenu,
  Scrollbar
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

  const scrollTo = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  const homeSection = useRef();
  const aboutMeSection = useRef();
  const projectsSection = useRef();
  const skillsSection = useRef();

  return (
    <>
      <Header
        scrollTo={scrollTo}
        homeSection={homeSection}
        aboutMeSection={aboutMeSection}
        skillsSection={skillsSection}
        projectsSection={projectsSection}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <Main>
        <Section ref={homeSection} id="hero">
          <Hero scrollTo={scrollTo} projectsSection={projectsSection} />
        </Section>
        <Section ref={aboutMeSection} id="aboutme">
          <AboutMe />
        </Section>
        <Section ref={skillsSection} id="skills">
          <SkillsList />
        </Section>
        <Section ref={projectsSection} id="projects">
          <ProjectsList />
        </Section>
        <MobileMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
        <Scrollbar />
        {isTablet && <Social />}
      </Main>
      <GlobalStyleComponent />
    </>
  );
}
