//imported dependencies
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Link } from "gatsby"

//imported images
import lips from "../images/logos/lips.png"

//imported colors
import { darkBlue, lavender, offBlack } from "../styles"

//component
const Header = () => (
  <Wrapper style={{backgroundColor: darkBlue}}>
    <Link to="/">
      <img src={lips} alt="lips" style={{height: "82px", width: "82px", margin: "0px"}} />
    </Link>
    <div className="btn-holder">
      <button>Portfolio</button>
      <button><Link to="#services">Services</Link></button>
      <button><Link to="#about">About Me</Link></button>
      <button>Contact</button>
    </div>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

//component-specific styling
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-holder {
    height: auto;

    display: flex;
    align-items: center;

    a:link, a:visited, a:active {
      color: ${offBlack};
    }
  
    a:hover {
      color: white;
      text-decoration: none;
    }
  }

  button {
    background-color: ${lavender};
    color: black;

    border: none;
    border-radius: 4px;

    height: 30px;
    width: 100px;

    margin: 15px;
  }
`

export default Header