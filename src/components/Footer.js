//imported dependencies
import React from "react"
import styled from "styled-components"

//imported icons
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"

//imported colors
import { darkBlue, periwinkle } from "../styles"

//component
const Footer = () => {
  return (
    <Wrapper className="row justify-content-center align-items-center flex-column">
      <div className="justify-content-center">
        <a href="https://www.facebook.com/Anitasaavedra702/" rel="noopener noreferrer" target="_blank" aria-label="link to Ana's Facebook page">
          <FaFacebookSquare className="icon" />
        </a>

        <a href="https://twitter.com/AnaSaav20733864?s=09" rel="noopener noreferrer" target="_blank" aria-label="link to Ana's Twitter page">
          <FaTwitterSquare className="icon" />
        </a>

        <a href="https://www.instagram.com/anas_makeup_glam/" rel="noopener noreferrer" target="_blank" aria-label="link to Ana's Instagram page">
          <FaInstagram className="icon" />
        </a>

        <a href="https://www.youtube.com/channel/UCxck-Oyy9pTGb_ZtfSqsBdQ" rel="noopener noreferrer" target="_blank" aria-label="link to Ana's YouTube channel">
          <FaYoutube className="icon" />
        </a>
      </div>
      
      <p>702-381-3158 | booking@anasmakeupglam.com</p>

      <p><a href="https://github.com/girafffene" rel="noopener noreferrer" target="_blank" ><FiGithub /> girafffene </a>© {new Date().getFullYear()}</p>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.footer`
  background-color: ${darkBlue};

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:active, p {
    color: white;
  }

  a:hover {
    color: ${periwinkle};
  }

  .icon {
    font-size: 30px;
    margin: 15px;
  }
`
//export statement
export default Footer