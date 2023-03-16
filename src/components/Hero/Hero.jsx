import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Scene, Container, Header } from "../";
import { Section, Content, LeftSide, RightSide, Title } from "./Hero.styled";

export default function Hero() {
  return (
    <Section>
      <Header />
      <Container>
        <Content>
          <LeftSide>
            <Title>
              Like a tiny hummingbird, I'm flying in search of new challenges
              and opportunities.
            </Title>
          </LeftSide>
          <RightSide>
            <Canvas>
              <OrbitControls enableZoom={false} />
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
