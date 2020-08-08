//imported dependencies
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//imported image
import colorLogo from "../images/logos/color-logo-transparent.png"

//imported colors
import { sapphire, lavender, purple } from "../styles"

//component
const Intro = () => {
  return (
    <Wrapper className="d-flex align-items-center flex-column">
      <img src={colorLogo} alt="logo" />
      <button><Link to="#contact">Book Now</Link></button>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.div`
  background-color: ${sapphire};
  
  padding: 3.5rem;

  img {
    width: 415px;
    height: auto;

    margin: 25px;
  }

  button {
    background-color: ${lavender};

    width: 110px;
    height: 35px;

    border: none;
    border-radius: 5px;

    font-size: 18px;

    a:link, a:visited, a:active {
      color: white;
    }
  
    a:hover {
      color: ${purple};
      text-decoration: none;
    }
  }
`
//export statement
export default Intro