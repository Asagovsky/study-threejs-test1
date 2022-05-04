import { useRef} from 'react'

export const Plane = ( props ) => {

  const geometryRef = useRef(null)

  return (
    <mesh
      ref={geometryRef}
      receiveShadow={true}
      castShadow={true}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      {...props}
    >
      <planeGeometry args={[120, 110]} receiveShadow={true} />
      <meshStandardMaterial attach="material" color={'white'} />
    </mesh>
  )
}