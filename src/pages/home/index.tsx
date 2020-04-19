import * as React from 'react'

export interface HelloProps {
  first_name: string
  last_name: string
}

const Home = (props: HelloProps) => {
  const {first_name = 'John', last_name = 'Doe'} = props

  return (
    <h1>
      Hello from {first_name} {last_name}!
    </h1>
  )
}

export default Home
