import { useState, useRef, useEffect } from "react";
import {
  Hero,
  Header,
  AboutMe,
  ProjectsList,
  SkillsList,
  Social,
  Loader,
  Section,
  Main,
  MobileMenu,
  Scrollbar,
} from "~/components";
import { GlobalStyleComponent } from "~/styles/GlobalStyles.styled";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", onPageLoad);
    return () => window.removeEventListener("load", onPageLoad);
  }, []);

  const scrollTo = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
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
      />
      {isLoading && <Loader />}
      <Main>
        <Section ref={homeSection}>
          <Hero scrollTo={scrollTo} projectsSection={projectsSection} />
        </Section>
        <Section ref={aboutMeSection}>
          <AboutMe />
        </Section>
        <Section ref={skillsSection}>
          <SkillsList />
        </Section>
        <Section ref={projectsSection}>
          <ProjectsList />
        </Section>
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        <Scrollbar />
        <Social />
      </Main>
      <GlobalStyleComponent />
    </>
  );
}
