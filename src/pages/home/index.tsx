import React from "react"
import { useTheme } from "styled-components"
import { Canvas, extend } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { Planet, CameraControls } from "components"
import { Theme } from "App"

extend({ OrbitControls })

const Home = () => {
  const theme: Theme = useTheme()

  return (
    <Canvas>
      <CameraControls />
      <ambientLight />
      <pointLight position={[0, 0, 0]} color={theme.color.sun} />
      <Planet position={[0, 0, 0]} color={theme.color.sun} />
    </Canvas>
  )
}

export default Home
