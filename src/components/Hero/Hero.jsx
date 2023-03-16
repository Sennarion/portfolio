import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Scene, Container, Header } from "../";
import {
  Section,
  Content,
  LeftSide,
  RightSide,
  Title,
  TitleAccent,
  Subtitle,
} from "./Hero.styled";

export default function Hero() {
  return (
    <Section id="home">
      <Header />
      <Container>
        <Content>
          <LeftSide>
            <div>
              <Title>
                Hi!
                <br />
                I'm Serhii,
                <br />
                frontend developer
              </Title>
              <Subtitle>
                Like a tiny <TitleAccent>hummingbird</TitleAccent>, I'm flying
                in search of new challenges and opportunities. I'm always on the
                move and buzzing with energy and enthusiasm.
              </Subtitle>
            </div>
          </LeftSide>
          <RightSide>
            <Canvas>
              <OrbitControls enableZoom={false} position={[10, 0, 0]} />
              <PerspectiveCamera makeDefault position={[10, 10, 10]} />
              <Stage environment="city" intensity={2}>
                <Scene />
              </Stage>
            </Canvas>
          </RightSide>
        </Content>
      </Container>
    </Section>
  );
}
