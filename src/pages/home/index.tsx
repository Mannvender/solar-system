import React from "react"
import { Canvas } from "react-three-fiber"

import { Planet } from "components"

const Home = () => {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 500] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Planet position={[2.2, 0, 0]} />
    </Canvas>
  )
}

export default Home
