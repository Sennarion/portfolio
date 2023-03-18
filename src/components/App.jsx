import { useRef } from "react";
import { Header, AboutMe, Contacts, ProjectsList, Hero, Social } from "./";
import { Wrapper, Section, MouseContainer } from "./App.styled";
import { BsMouse } from "react-icons/bs";

export default function App() {
  const homeSection = useRef();
  const aboutMeSection = useRef();
  const projectsSection = useRef();
  const contactsSection = useRef();

  return (
    <Wrapper>
      <Header
        homeSection={homeSection}
        aboutMeSection={aboutMeSection}
        projectsSection={projectsSection}
        contactsSection={contactsSection}
      />
      <Section ref={homeSection}>
        <Hero />
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
    </Wrapper>
  );
}
