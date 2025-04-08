"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface DraggableMapProps {
  svgPath: string;
  svgSize: { width: number; height: number }; // Set SVG size
}

const DraggableMap = ({ svgPath, svgSize }: DraggableMapProps) => {
  const texture = useTexture(svgPath); // SVG texture load
  return (
    <mesh>
      <planeGeometry args={[svgSize.width, svgSize.height]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const MapControls = ({ svgSize }: { svgSize: { width: number; height: number } }) => {
  const { camera, size } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const limits = useRef({ halfWidth: 0, halfHeight: 0 });

  // 이동 제한 범위를 동적으로 계산
  const updateLimits = () => {
    let visibleWidth, visibleHeight;

    if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const perspectiveCamera = camera as THREE.PerspectiveCamera;
      const distance = perspectiveCamera.position.z;
      const fov = (perspectiveCamera.fov * Math.PI) / 180;
      visibleHeight = 2 * Math.tan(fov / 2) * distance;
      visibleWidth = visibleHeight * (size?.width / size?.height);
    } else if ((camera as THREE.OrthographicCamera).isOrthographicCamera) {
      const orthographicCamera = camera as THREE.OrthographicCamera;
      visibleWidth = orthographicCamera.right - orthographicCamera.left;
      visibleHeight = orthographicCamera.top - orthographicCamera.bottom;
    }

    limits.current.halfWidth = svgSize.width / 2 - visibleWidth / 2;
    limits.current.halfHeight = svgSize.height / 2 - visibleHeight / 2;
  };

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    setIsDragging(true);
    dragStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;

    const deltaX = (event.clientX - dragStart.current.x) * 0.2;
    const deltaY = (event.clientY - dragStart.current.y) * 0.2;

    const { halfWidth, halfHeight } = limits.current;

    const newX = camera.position.x - deltaX;
    const newY = camera.position.y + deltaY;

    camera.position.x = Math.min(halfWidth, Math.max(-halfWidth, newX));
    camera.position.y = Math.min(halfHeight, Math.max(-halfHeight, newY));

    dragStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    updateLimits();
  }, [size?.width]);

  return (
    <mesh
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      visible={false}
    >
      <planeGeometry args={[svgSize.width, svgSize.height]} />
      <meshBasicMaterial transparent={true} opacity={0} />
    </mesh>
  );
};

// *

export default function R3FMapComponent() {
  // ! Set the same size as the SVG file ( width, height )
  // ? required: the same size as the planeGeometry
  const svgSize = { width: 1118, height: 822 };

  return (
    <>
      <section className={"flex flex-col w-full h-screen"}>
        <div className={"text-[80px] font-bold py-[30px] flex justify-center relative"}>
          <p>Look at this map!</p>
        </div>

        {/* Map section */}
        <div className={`primary-transition relative bg-red-500 p-[20px] grow w-[calc(100%-200px)]`}>
          <Canvas className={`w-full h-full`} camera={{ position: [0, 0, 120], fov: 100 }}>
            <ambientLight />
            {/* Camera control by dragging */}
            <MapControls svgSize={svgSize} />
            {/* SVG Map */}
            <DraggableMap svgPath="/svg/three/japan_map.svg" svgSize={svgSize} />
          </Canvas>
        </div>
      </section>

      <aside className={`fixed primary-transition flex flex-col h-full w-[200px] bg-blue-300 top-0 right-0`}>
        Aside
      </aside>
    </>
  );
}
