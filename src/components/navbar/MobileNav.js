import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll';


import { darkBlue } from "../../styles"

const MobileNav = ({ open }) => {
  return (
    <Wrapper className="btn-holder d-flex align-items-center" open={open} style={{backgroundColor: `${darkBlue}`, zIndex: "20"}}>
      <button><Link to="/portfolio">Portfolio</Link></button>
      <button onClick={() => scrollTo('#services')}><Link to="/#services">Services</Link></button>
      <button onClick={() => scrollTo('#about')}><Link to="/#about">About Me</Link></button>
      <button onClick={() => scrollTo('#contact')}><Link to="/#contact">Contact</Link></button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 75%;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

export default MobileNav