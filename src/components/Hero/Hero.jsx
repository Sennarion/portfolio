import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Container, Bird, Button } from "~/components";
import useMediaQuery from "~/hooks/useMediaQuery";
import { theme } from "~/styles/theme";
import {
  Content,
  LeftSide,
  RightSide,
  Title,
  Subtitle,
  TitleAccent,
} from "./Hero.styled";

export default function Hero({ scrollTo, projectsSection }) {
  const isDesktop = useMediaQuery(`(min-width: ${theme.media.desktop})`);

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
              and enthusiasm. So if you're looking for a motivated candidate to
              join your team, I'm ready to spread my wings and take flight
              towards success.
            </Subtitle>
            <Button onClick={() => scrollTo(projectsSection)}>
              Check out projects
            </Button>
          </div>
        </LeftSide>
        <RightSide>
          <Canvas>
            <ambientLight intensity={8} color="#e5ff00" />
            <directionalLight position={[10, 4, 0]} />
            <directionalLight position={[-10, 20, 0]} />
            <ContactShadows position={[0, -3, 1]} blur={2} scale={30} far={6} />
            <OrbitControls enableZoom={false} />
            <PerspectiveCamera makeDefault position={[8, 2, 20]} />
            <Bird position={isDesktop ? [0, -5, 0] : [0, -2, 0]} />
          </Canvas>
        </RightSide>
      </Content>
    </Container>
  );
}
