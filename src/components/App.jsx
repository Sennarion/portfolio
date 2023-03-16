import { AboutMe, Contacts, Gallery, Hero, Skills } from "./";
import { Wrapper } from "./App.styled";

export default function App() {
  return (
    <Wrapper>
      <Hero />
      <Skills />
      <Gallery />
      <AboutMe />
      <Contacts />
    </Wrapper>
  );
}
