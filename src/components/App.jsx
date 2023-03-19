import { useState, useRef, useEffect } from "react";
import {
  Header,
  Hero,
  AboutMe,
  ProjectsList,
  SkillsList,
  Social,
  Loader,
} from "./";
import { GlobalStyleComponent } from "~/styles/GlobalStyles.styled";
import { Main, Section, MouseContainer } from "./App.styled";
import { BsMouse } from "react-icons/bs";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

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
        <MouseContainer>
          <BsMouse size={40} />
        </MouseContainer>
        <Social />
      </Main>
      <GlobalStyleComponent />
    </>
  );
}
