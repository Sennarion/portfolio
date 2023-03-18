import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Container, Bird, Button } from "..";
import {
  Content,
  LeftSide,
  RightSide,
  Title,
  Subtitle,
  TitleAccent,
} from "./Hero.styled";

export default function Hero() {
  return (
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
              and opportunities. I'm always on the move and buzzing with energy
              and enthusiasm.
            </Subtitle>
          </div>
          <a href="#projects">
            <Button>Check out projects</Button>
          </a>
        </LeftSide>
        <RightSide>
          <Canvas>
            <ambientLight intensity={10} />
            <directionalLight position={[10, 4, 0]} />
            <ContactShadows position={[0, -3, 1]} blur={2} scale={30} far={6} />
            <OrbitControls enableZoom={false} />
            <PerspectiveCamera makeDefault position={[8, 2, 20]} />
            <Bird position={[0, -5, 0]} />
          </Canvas>
        </RightSide>
      </Content>
    </Container>
  );
}
