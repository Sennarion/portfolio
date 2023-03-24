import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import useMediaQuery from "~/hooks/useMediaQuery";
import { theme } from "~/styles/theme";

export default function Bird(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/bird-transformed.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Animation"].play();
  }, [actions]);

  const isDesktop = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
    <group ref={group} {...props} dispose={null} scale={isDesktop ? 150 : 100}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal1_1">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
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

useGLTF.preload("/bird-transformed.glb");
