import { forwardRef } from 'react'

export const Box = forwardRef(( props, geometryRef ) => {

  return (
    <mesh
      ref={geometryRef}
      receiveShadow={true}
      castShadow={true}
      {...props}
    >
      <boxGeometry args={[1, 1, 1]} translate={[0, -0.5, 0]} castShadow={true}  />
      <meshStandardMaterial attach="material" color={'yellow'} />
    </mesh>
  )
})