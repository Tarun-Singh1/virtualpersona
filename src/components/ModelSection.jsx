import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import Heading from './Heading'; // Adjust the import path as necessary

const Model = ({ isInteractive }) => {
  const { scene } = useGLTF('/src/assets/3dmodel.glb');
  const modelRef = useRef();
  const [isRotating, setIsRotating] = useState(true);

  // Animation function using useFrame hook
  useFrame(() => {
    if (modelRef.current && isRotating && isInteractive) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });

  // Stop rotation on hover or click
  const handleMouseEnter = () => {
    setIsRotating(false);
  };

  const handleMouseLeave = () => {
    setIsRotating(true);
  };

  return (
    <primitive
      object={scene}
      ref={modelRef}
      position={[0, -3, 0]}
      scale={3.5}
      rotation={[0, -Math.PI / 2 + Math.PI / 2, 0]} // Start rotated 90 degrees to the right
      onPointerEnter={handleMouseEnter} // Stop rotating on hover
      onPointerLeave={handleMouseLeave} // Resume rotating on leave
      onClick={handleMouseEnter} // Stop rotating on click
    />
  );
};

const ModelSection = () => {
  return (
    <section id="roadmap" className="flex flex-col justify-center items-center h-screen bg-n-8">
      <Heading title="Expect 3D Models like her" />
      <div className="w-full max-w-[600px] h-[600px] text-center">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Model isInteractive={true} />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </section>
  );
};

export default ModelSection;
