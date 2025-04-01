import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  // useframe hook from react three fiber
  useFrame((state,delta)=> {
    ref.current.rotation.x -= delta / 10; // rotate the stars in x direction
    ref.current.rotation.y -= delta / 10; // rotate the stars in y direction
  })

  return (
    <group rotation={[0,0,Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          size={0.005} // you can increase the size of stars here
          color={"#f272c8"}
          transparent
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    // stars will hide behind the canvas
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
