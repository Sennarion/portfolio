import { useRef } from "react";
import { Header, AboutMe, Contacts, ProjectsList, Hero, Social } from "./";
import { Wrapper, MouseContainer } from "./App.styled";
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
      <section ref={homeSection}>
        <Hero />
      </section>
      <section ref={aboutMeSection}>
        <AboutMe />
      </section>
      <section ref={projectsSection}>
        <ProjectsList />
      </section>
      <section ref={contactsSection}>
        <Contacts />
      </section>
      <MouseContainer>
        <BsMouse size={40} />
      </MouseContainer>
      <Social />
    </Wrapper>
  );
}
