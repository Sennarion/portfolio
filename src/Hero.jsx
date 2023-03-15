import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Eagle from "./Eagle";
import Gyro from "./Gyro";

export default function Hero() {
  return (
    <Canvas>
      <Stage environment="city" intensity={1}>
        <Gyro />
      </Stage>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
