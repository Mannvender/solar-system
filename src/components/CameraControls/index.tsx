import React, { useRef } from "react"
import { useThree, useFrame } from "react-three-fiber"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: any
    }
  }
}

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  const controls: any = useRef()
  useFrame((state) => controls.current.update())

  return <orbitControls ref={controls} args={[camera, domElement]} />
}

export default CameraControls
