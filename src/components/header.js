import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import lips from "../images/logos/lips.png"
import { darkBlue, lavender } from "../styles"
import styled from "styled-components"

const Header = () => (
  <Wrapper style={{backgroundColor: darkBlue}}>
    <Link to="/">
      <img src={lips} alt="lips" style={{height: "82px", width: "82px", margin: "0px"}} />
    </Link>
    <div className="btn-holder">
      <button>Portfolio</button>
      <button>Services</button>
      <button>About Me</button>
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

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-holder {
    height: auto;

    display: flex;
    align-items: center;
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