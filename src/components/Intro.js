import React from "react"
import styled from "styled-components"

import colorLogo from "../images/logos/color-logo-transparent.png"
import { sapphire } from "../styles"

const Intro = () => {
  return (
    <Wrapper>
      <img src={colorLogo} />
      <button>Book Now</button>
    </Wrapper>
  )
}

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
    width: 100px;
    height: 30px;
  }
`

export default Intro