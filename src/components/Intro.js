//imported dependencies
import React from "react"
import styled from "styled-components"

//imported image
import colorLogo from "../images/logos/color-logo-transparent.png"

//imported colors
import { sapphire } from "../styles"

//component
const Intro = () => {
  return (
    <Wrapper>
      <img src={colorLogo} alt="logo" />
      <button>Book Now</button>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${sapphire};
  padding: 2rem;

  img {
    width: 450px;
    height: auto;
    
    margin: 25px;
  }

  button {
    background-color: white;

    width: 110px;
    height: 35px;

    border: none;
    border-radius: 5px;

    font-size: 18px;
  }
`
//export statement
export default Intro