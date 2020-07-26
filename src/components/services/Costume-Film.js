import React from "react"
import styled from "styled-components"

import { lavender } from "../../styles"
import mirror from "../../images/mirror.png"
import joker from "../../images/joker.jpg"

const Cosplay = () => {
  return (
    <Wrapper className="row">
      <div className="col-sm-3">
        <div className="title-box">
          <img src={mirror} alt="vanity mirror"/>
          <p>Costume and Film</p>
        </div>
      </div>

      <div className="col-sm-4">
        <p>I also provide makeup artistry for costumes, cosplay and film. No matter the season, whether it's Halloween or Comi-Con, or looking to highlight your characters in your film or play, I can help you realize your costume.</p>
      </div>

      <div className="col-sm-3">
        <img alt="girl with The Joker makeup" src={joker} className="joker" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid ${lavender};

  .title-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    background-color: ${lavender};

    width: 225px;
    height: 225px;

    font-size: 34px;

    border-radius: 18px;

    img {
      height: 64px;
      width: 64px;
    }

    margin: 0px 50px;
  }

  .joker {
    height: 225px;
    width: auto;
    border-radius: 20px;
  }
`

export default Cosplay