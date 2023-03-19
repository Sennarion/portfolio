import { useState, useRef, useEffect } from "react";
import {
  Header,
  Hero,
  AboutMe,
  Contacts,
  ProjectsList,
  Social,
  Loader,
} from "./";
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
  const contactsSection = useRef();

  return (
    <>
      <Header
        scrollTo={scrollTo}
        homeSection={homeSection}
        aboutMeSection={aboutMeSection}
        projectsSection={projectsSection}
        contactsSection={contactsSection}
      />
      {isLoading && <Loader />}
      <Main>
        <Section ref={homeSection}>
          <Hero scrollTo={scrollTo} projectsSection={projectsSection} />
        </Section>
        <Section ref={aboutMeSection}>
          <AboutMe />
        </Section>
        <Section ref={projectsSection}>
          <ProjectsList />
        </Section>
        <Section ref={contactsSection}>
          <Contacts />
        </Section>
        <MouseContainer>
          <BsMouse size={40} />
        </MouseContainer>
        <Social />
      </Main>
    </>
  );
}
