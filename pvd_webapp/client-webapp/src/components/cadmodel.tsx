import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'; //The 3D scene container from three fiber.
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'; //For user interactions and lighting.

interface ModelProps {
  cadPath: string; //Requires ModelProps to have cadPath.
}

function Model({ cadPath }: ModelProps) {
  const { scene } = useGLTF(cadPath); //useGLTF hook loads the 3D model from path.
  return <primitive object={scene} />; //Return an object containing the model's scene.
}

export default function ModelViewer({ cadPath }: ModelProps) {
  //Adds different types of lighting, suspense(delays rendering until it's loaded), allows for user interaction, and loads the model component on a canvas(rendering container) on a black background.
  return (
    <Canvas gl={{ alpha: false }} style={{ background: '#101010' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model cadPath={cadPath} />
      </Suspense>
      <OrbitControls enableZoom={true} />
      <Environment preset="sunset" />
    </Canvas>
  );
}