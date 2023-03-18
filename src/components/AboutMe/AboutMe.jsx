import { Container, SkillsList } from "..";
import { Title, Content, Description, Avatar } from "./AboutMe.styled";
import avatar from "../../assets/avatar.jpg";

export default function AboutMe() {
  return (
    <Container>
      <Content>
        <Avatar>
          <img src={avatar} alt="avatar" />
        </Avatar>
        <Description>
          <Title>About me</Title>
          I'm an enthusiastic and detail-oriented frontend developer seeking a
          full-time position in a company where I can apply my skills in coding,
          continue expanding my knowledge, and tackle new challenges. I'm
          skilled in HTML, CSS, JavaScript, and React. I primarily focus on
          writing clean, elegant, and efficient code. I'm a fast-learner and can
          quickly integrate into a team, thereby providing value to the company
          and its customers.
        </Description>
        <SkillsList />
      </Content>
    </Container>
  );
}
