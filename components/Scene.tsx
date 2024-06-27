"use client";

import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  ScrollControls,
  useProgress,
} from "@react-three/drei";

//
import TinkerScene from "./TinkerScene";
import ShaderScene from "./ShaderScene";
import NoiseScene from "./NoiseScene";
//

export default function Scene() {
  // const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Canvas
      // set to true if you want ortographic camera
      orthographic={false}
      camera={{
        // ---------------------------------------
        // ---------------------------------------
        // ortographic camera
        // isOrthographicCamera: true,
        // near: -100,
        // far: 100,
        // ---------------------------------------
        // perspective camera
        position: [0, 0, 4],
        isPerspectiveCamera: true,
        fov: 20,
        near: 0.1,
        far: 100,
        // ---------------------------------------
        // aspect: 1, // don't adjust this, it will mess up aspect ration
        /* lookAt: (ve3) => {
          console.log({ ve3 });
        }, */
      }}
      // ref={canvasRef}
      gl={{
        antialias: true,
      }}
      dpr={[1, 1.5]}
      className="canvas-holder"
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls />
        {/* <ScrollControls damping={0.5} pages={4}> */}
        {/* <TinkerScene /> */}
        {/* <ShaderScene /> */}
        <NoiseScene />
        {/* </ScrollControls> */}
      </Suspense>
    </Canvas>
  );
}

function Loader() {
  const { active, progress } = useProgress();

  return (
    <Html center className="text-3xl text-stone-100">
      {progress.toFixed(1)}% loaded
    </Html>
  );
}
