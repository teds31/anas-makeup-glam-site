//imported dependencies
import React from "react"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll';

//imported image
import colorLogo from "../images/logos/color-logo-transparent.png"

//imported colors
import { sapphire, lavender, purple } from "../styles"

//component
const Intro = () => {
  return (
    <Wrapper className="d-flex align-items-center flex-column">
      <img src={colorLogo} alt="logo" />
      <button onClick={() => scrollTo('#contact')}>Book Now</button>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.div`
  background-color: ${sapphire};

  padding: 3.5rem;

  img {
    width: 365px;
    height: auto;

    margin: 35px;
  }

  button {
    background-color: ${lavender};

    width: 145px;
    height: 45px;

    border: none;
    border-radius: 5px;

    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;

    a:link, a:visited, a:active {
      color: ${purple};
    }

    a {
      text-decoration: none;
    }
  }
`
//export statement
export default Intro