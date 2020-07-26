import React from "react"
import styled from "styled-components"

import { sapphire } from "../styles"

const Quote = () => {
  return (
    <Wrapper>
      <h2>"The most beautiful makeup of a woman is passion. But cosmetics are easier to buy."</h2>
      <p>~ <em>Yves Saint-Laurent</em></p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${sapphire};
`

export default Quote