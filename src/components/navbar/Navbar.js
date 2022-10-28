//imported dependencies
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import Burger from "./Burger"

//imported images
import lips from "../../images/logos/lips.png"

//imported colors
import { darkBlue, lavender, purple } from "../../styles"

//component
const Header = () => (
  <Wrapper className="d-flex align-items-center justify-content-between" style={{backgroundColor: darkBlue}}>
    <Link to="/">
      <img src={lips} alt="lips" style={{height: "82px", width: "82px", margin: "0px"}} />
    </Link>
    <Burger />
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Ana's Makeup Glam`,
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

      height: 37px;
      width: 115px;

      margin: 15px;

      a {
        text-decoration: none;
      }

      a:link, a:visited, a:active {
        color: ${purple};
      }
    }
  }
`

export default Header