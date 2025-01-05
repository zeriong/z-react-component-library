"use client";

import React, { useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

interface DraggableMapProps {
  svgPath: string;
  svgSize: { width: number; height: number }; // Set SVG size
}

const DraggableMap = ({ svgPath, svgSize }: DraggableMapProps) => {
  const texture = useTexture(svgPath); // SVG texture load
  return (
    <mesh>
      <planeGeometry args={[svgSize.width, svgSize.height]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
};

// Map style Camera control
const MapControls = ({ svgSize }: { svgSize: { width: number; height: number } }) => {
  const { camera, viewport } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handlePointerDown = (event: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!isDragging) return;

    const deltaX = (event.clientX - dragStart.current.x) * 0.2;
    const deltaY = (event.clientY - dragStart.current.y) * 0.2;

    // Calculating movement limits based on screen size and ratio
    const halfWidth = svgSize.width / 2 - viewport.width / 2;
    const halfHeight = svgSize.height / 2 - viewport.height / 2;

    const newX = camera.position.x - deltaX;
    const newY = camera.position.y + deltaY;

    camera.position.x = Math.min(halfWidth, Math.max(-halfWidth, newX));
    camera.position.y = Math.min(halfHeight, Math.max(-halfHeight, newY));

    dragStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <mesh
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      visible={false} // ? Invisible mesh for dragging
    >
      <planeGeometry
        // ! Set the same size as the SVG file ( width, height )
        args={[1118, 822]}
      />
      <meshBasicMaterial transparent={true} opacity={0} />
    </mesh>
  );
};

export default function Page() {
  // ! Set the same size as the SVG file ( width, height )
  // ? required: the same size as the planeGeometry
  const svgSize = { width: 1118, height: 822 };

  return (
    <section className={"flex flex-col w-full h-screen"}>
      <h1 className={"text-[80px] font-bold py-[30px] text-center"}>Look at this map!</h1>
      {/* Map section */}
      <div className={"w-full bg-red-500 p-[20px] grow"}>
        <Canvas className={"w-full h-full"} camera={{ position: [0, 0, 120], fov: 100 }}>
          <ambientLight />
          {/* Camera control by dragging */}
          <MapControls svgSize={svgSize} />
          {/* SVG Map */}
          <DraggableMap svgPath="/svg/japan_map.svg" svgSize={svgSize} />
        </Canvas>
      </div>
    </section>
  );
}
