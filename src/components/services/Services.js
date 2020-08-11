import React from "react"

import styled from "styled-components"

import Makeup from "./Makeup"
import Hair from "./Hair"
import Cosplay from "./Costume-Film"

const Services = () => {
  return (
    <Wrapper id="services">
      <Makeup />
      <Hair />
      <Cosplay />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Services