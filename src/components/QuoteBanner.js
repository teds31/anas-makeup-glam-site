import React from "react"
import styled from "styled-components"

import { sapphire } from "../styles"

const Quote = () => {
  return (
    <Wrapper className="col-md-12 d-flex flex-column align-items-center">
      <h2>"The most beautiful makeup of a woman is passion. But cosmetics are easier to buy."</h2>
      <br />
      <p>~ <em>Yves Saint-Laurent</em></p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${sapphire};

  padding: 25px;

  color: white;
`

export default Quote