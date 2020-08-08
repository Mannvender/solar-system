// lib imports
import React from "react"

// shared imports
import Box from "components/Box"

interface Props {
  children?: any
}
const StackLayout = ({ children }: Props) => {
  return (
    <Box
      height="100vh"
      bgColor="dark-1"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "space.jpg"})`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </Box>
  )
}

export default StackLayout
