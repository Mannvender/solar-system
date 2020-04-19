import * as React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div<{
  height: string
  bgColor: string
}>`
  display: flex;
  flex-direction: column;
  height: ${({theme, height}) => theme.size[height] || height};
  background-color: ${({theme, bgColor}) => theme.color[bgColor] || bgColor};
`

interface Props {
  height?: string
  bgColor?: string
  children?: any
}
const Box = ({children, height = '', bgColor = '', ...rest}: Props) => {
  return (
    <StyledDiv height={height} bgColor={bgColor} {...rest}>
      {children}
    </StyledDiv>
  )
}

export default Box
