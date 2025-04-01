import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf')

  return <primitive
    object={earth.scene}
    scale={2.5}
    position-y={0}
    rotation-y={-Math.PI / 2}
  />;
};

//3D Earth Model
const EarthScene = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [-4, 3, 6],
        fov : 45,
        near: 0.1,
        far: 1000,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
      {/* All controls here */}
        <OrbitControls
          autoRotate // will automatically rotate
          enablePan={false}
          enableZoom={false}
          enableDamping={true}
          enableRotate={true} // enable rotation of the earth model
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  );
};

export default EarthScene;


// orbitControls are used to modify the camera position and rotation
// enablePan, enableZoom, enableRotate are used to enable or disable the camera controls
// modify and move around the earth using the mouse