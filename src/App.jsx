import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Hero from "./Hero";

export default function App() {
  return (
    <div style={{ height: 800 }}>
      {/* <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={(5, 2, 1)} />

        <Sphere args={[1, 100, 200]} scale={1}>
          <MeshDistortMaterial
            color="#8f04da"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas> */}
      <Hero />
    </div>
  );
}
