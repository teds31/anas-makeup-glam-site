import React from "react"

import styled from "styled-components"

import Makeup from "./Makeup"
import Hair from "./Hair"
import Cosplay from "./Costume-Film"
import Sentimental from "./SentimentalQuote"
import { lavender, sapphire } from "../../styles"

const Services = () => {
  return (
    <Wrapper id="services">
      <Makeup />
      <Hair />
      <Cosplay />
      <Sentimental />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title-box {
    background-color: ${lavender};

    width: 225px;
    height: 225px;

    font-size: 34px;

    margin: 0px 50px;

    border-radius: 18px;

    img {
      height: 64px;
      width: 64px;
    }

    p {
      color: ${sapphire};
      margin: 0;
    }
  }
`

export default Services