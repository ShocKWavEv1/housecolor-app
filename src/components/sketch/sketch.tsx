import {
  getFragMainShader,
  getMainShaderHeight,
  vertShader,
} from "@/app/lib/shaders/shaders";
import { useWindowSize } from "@uidotdev/usehooks";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { SketchProps } from "./model";

const SketchMain: React.FC<SketchProps> = ({ orientation, shaderColor }) => {
  const canvasRef: any = useRef(null);
  const { width, height }: { width: any; height: any } = useWindowSize();

  useEffect(() => {
    const vertexShader = vertShader;
    const fragmentShader = getFragMainShader(shaderColor);

    // Set up Three.js scene here
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight, // Set the aspect ratio here
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(width, getMainShaderHeight(width, height, orientation));

    // Create shader materials using the imported shaders
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        time: { value: 0 },
        resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
    });

    // Create mesh and add to the scene
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      -1, -1, 0, 1, -1, 0, 1, 1, 0,

      -1, -1, 0, 1, 1, 0, -1, 1, 0,
    ]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Position camera
    camera.position.z = 1;

    // Animation and rendering code
    const animate = (time: any) => {
      // Update shader uniforms
      material.uniforms.time.value = time * 0.0006;

      // Render the scene
      renderer.render(scene, camera);

      // Call the next animation frame
      requestAnimationFrame(animate);
    };

    animate(1);

    return () => {
      // Cleanup code if necessary
    };
  }, [width, height]);

  return <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default SketchMain;
