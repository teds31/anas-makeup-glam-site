//imported dependencies
import React from "react"
import styled from "styled-components"

//imported colors
import { sapphire } from "../styles"

//component
const Quote = () => {
  return (
    <Wrapper className="col-md-12 d-flex flex-column align-items-center text-center">
      <p className="quote">"The most beautiful makeup of a woman is passion. But cosmetics are easier to buy."</p>
      <br />
      <p><em>~Yves Saint-Laurent</em></p>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.div`
  background-color: ${sapphire};
  padding: 35px;
  color: white;

  p {
    margin: 0px;
  }

  .quote {
    font-size: 32px;
  }
`
//export statement
export default Quote