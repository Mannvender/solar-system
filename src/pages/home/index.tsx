import React from "react"
import { Canvas, extend } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { Planet, CameraControls } from "components"

extend({ OrbitControls })

const Home = () => {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Planet position={[2.2, 0, 0]} />
    </Canvas>
  )
}

export default Home
