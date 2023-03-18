import { Header, AboutMe, Contacts, ProjectsList, Hero, Social } from "./";
import { Wrapper, MouseContainer } from "./App.styled";
import { BsMouse } from "react-icons/bs";

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <AboutMe />
      <ProjectsList />
      <Contacts />
      <MouseContainer>
        <BsMouse size={40} />
      </MouseContainer>
      <Social />
    </Wrapper>
  );
}
