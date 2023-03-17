import { Container } from "..";
import {
  Section,
  Content,
  LeftSide,
  RightSide,
  Avatar,
} from "./AboutMe.styled";

export default function AboutMe() {
  return (
    <Section id="aboutme">
      <Container>
        <Content>
          <LeftSide></LeftSide>
          <RightSide>
            I'm an enthusiastic and detail-oriented frontend developer seeking a
            full-time position in a company where I can apply my skills in
            coding, continue expanding my knowledge, and tackle new challenges.
            I'm skilled in HTML, CSS, JavaScript, and React. I primarily focus
            on writing clean, elegant, and efficient code. I'm a fast-learner
            and can quickly integrate into a team, thereby providing value to
            the company and its customers.
          </RightSide>
        </Content>
      </Container>
    </Section>
  );
}
