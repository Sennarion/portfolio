import { AboutMe, Contacts, Projects, Hero, Skills } from "./";
import { Wrapper } from "./App.styled";

export default function App() {
  return (
    <Wrapper>
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contacts />
    </Wrapper>
  );
}
