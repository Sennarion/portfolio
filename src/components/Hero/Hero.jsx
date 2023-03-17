import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Container, Bird, Button } from "..";
import {
  Section,
  Content,
  LeftSide,
  RightSide,
  Title,
  Subtitle,
  TitleAccent,
} from "./Hero.styled";
import { BsEyeFill } from "react-icons/bs";

export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <Content>
          <LeftSide>
            <div>
              <Title>
                Hi!
                <br />
                I'm Serhii,
                <br />
                <TitleAccent>frontend developer</TitleAccent>
              </Title>
              <Subtitle>
                Like a tiny hummingbird, I'm flying in search of new challenges
                and opportunities. I'm always on the move and buzzing with
                energy and enthusiasm.
              </Subtitle>
            </div>
            <a href="#projects">
              <Button>
                <BsEyeFill />
                Check out projects
              </Button>
            </a>
          </LeftSide>
          <RightSide>
            <Canvas>
              <OrbitControls enableZoom={false} position={[10, 0, 0]} />
              <PerspectiveCamera makeDefault position={[10, 10, 10]} />
              <Stage intensity={2}>
                <Bird />
              </Stage>
            </Canvas>
          </RightSide>
        </Content>
      </Container>
    </Section>
  );
}
