import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Bird(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/bird.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Animation"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal1_1">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="humming_bird85_85_correction">
                      <group name="humming_bird85_85" />
                    </group>
                    <skinnedMesh
                      name="Object_91"
                      geometry={nodes.Object_91.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_91.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/bird.glb");
