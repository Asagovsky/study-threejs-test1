// import studio from "@theatre/studio";
import { useRef } from "react";
import { Canvas } from '@react-three/fiber'
import { getProject } from "@theatre/core";

import { Box } from './components/Box'
import { Plane } from './components/Plane'
import { useBoxJump } from './hooks/useBoxJump'
import state from './theatre/state.json'

// studio.initialize();

function App() {
  const boxRef1 = useRef(null)
  const boxRef2 = useRef(null)
  const boxRef3 = useRef(null)

  const project = getProject("First project", {state})

  const makeJump = useBoxJump(project)

  makeJump(1, boxRef1)
  makeJump(2, boxRef2)
  makeJump(3, boxRef3)

  return (
    <div className="App" style={{height: '100vh', width:'100vw'}} >
      <Canvas camera={{fov: 90, position: [0, 8, 12], far: 1000}} shadowMap={true} shadows={true} >
        <fog attach="fog" args={["white", 0, 40]} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[20, 100, 40]} intensity={1} castShadow={true} shadow-mapSize-height={512} shadow-mapSize-width={512}  />
        <Box ref={boxRef1} position={[-4, 6, 1]} />
        <Box ref={boxRef2} position={[0, 6, 1]} />
        <Box ref={boxRef3} position={[4, 6, 1]} />
        <Plane />
      </Canvas>
    </div>
  );
}

export default App;
