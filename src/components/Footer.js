import React from "react"
import styled from "styled-components"

import { AiFillTwitterCircle } from "react-icons/ai"
import { TiSocialInstagramCircular, TiSocialYoutubeCircular } from "react-icons/ti"
import { FaFacebook } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { MdPhoneIphone } from "react-icons/md"

import { darkBlue } from "../styles"

const Footer = () => {
  return (
    <Wrapper>
      <div className="icon-holder">
        <a href="https://www.instagram.com/anas_makeup_glam/" rel="noopener noreferrer" target="_blank" aria-label="link to Ana's Instagram page">
          <TiSocialInstagramCircular />
        </a>
        <a href="https://www.facebook.com/Anitasaavedra702/" rel="noopener noreferrer" target="_blank" aria-label="link to Ana's Facebook page">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/AnaSaav20733864?s=09" rel="noopener noreferrer" target="_blank" aria-label="link to Ana's Twitter page">
          <AiFillTwitterCircle />
        </a>
        <a href="https://www.youtube.com/channel/UCxck-Oyy9pTGb_ZtfSqsBdQ" rel="noopener noreferrer" target="_blank" aria-label="link to Ana's YouTube channel">
          <TiSocialYoutubeCircular />
        </a>
      </div>
      <div>
        <FiMail /><p>booking@anasmakeupglam.com</p>
        <MdPhoneIphone /><p>702-381-3158</p>
      </div>
      <p>© {new Date().getFullYear()}</p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: ${darkBlue};
`

export default Footer