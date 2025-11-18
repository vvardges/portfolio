import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = ({rotation, ...props}) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'models/vako.glb',
  );

  // Animate when rotation prop changes
  useGSAP(() => {
    gsap.to(targetRef.current.rotation, {
      x: rotation[0],
      y: rotation[1],
      z: rotation[2],
      duration: 1,
      ease: 'power2.inOut'
    });
  }, rotation);

  return (
    <mesh {...props} ref={targetRef} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
