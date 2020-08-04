//imported dependencies
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

//imported images
import lips from "../images/logos/lips.png"

//imported colors
import { darkBlue, lavender, purple } from "../styles"

//component
const Header = () => (
  <Wrapper className="d-flex align-items-center justify-content-between" style={{backgroundColor: darkBlue}}>
    <Link to="/">
      <img src={lips} alt="lips" style={{height: "82px", width: "82px", margin: "0px"}} />
    </Link>
    <div className="btn-holder d-flex align-items-center">
      <button><Link to="/portfolio">Portfolio</Link></button>
      <button><Link to="#services">Services</Link></button>
      <button><Link to="#about">About Me</Link></button>
      <button><Link to="#contact">Contact</Link></button>
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
  .btn-holder {
    height: auto;

    button {
      background-color: ${lavender};
      color: black;
  
      border: none;
      border-radius: 4px;
  
      height: 30px;
      width: 100px;
  
      margin: 15px;

      a:link, a:visited, a:active {
        color: white;
      }
    
      a:hover {
        color: ${purple};
        text-decoration: none;
      }
    }
  }
`

export default Header