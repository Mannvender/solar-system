import React, { useRef, useState } from "react"

interface Props {
  color: string
  position: [number, number, number]
}
const Planet = ({ color, ...rest }: Props) => {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef()

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  //   @todo: rotate planets wrt axis
  //   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...rest}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
    >
      <sphereBufferGeometry attach="geometry" args={[0.8, 32, 32]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Planet
