"use client";

import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls, useTexture } from "@react-three/drei";

interface Props {
  svgPath: string;
}

const DraggableSVG = ({ svgPath }: Props) => {
  const meshRef = useRef(null);
  const texture = useTexture(svgPath);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <TransformControls
      object={meshRef.current}
      enabled={isDragging}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
    >
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
    </TransformControls>
  );
};

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {/* Draggable SVG */}
      <DraggableSVG svgPath="/svg/japan_map.svg" />
    </Canvas>
  );
};

export default App;
