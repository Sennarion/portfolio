import { AboutMe, Contacts, Projects, Hero, Social } from "./";
import { Wrapper, MouseContainer } from "./App.styled";
import { BsMouse } from "react-icons/bs";

export default function App() {
  return (
    <Wrapper>
      <Hero />
      <AboutMe />
      <Projects />
      <Contacts />
      <MouseContainer>
        <BsMouse size={40} />
      </MouseContainer>
      <Social />
    </Wrapper>
  );
}
