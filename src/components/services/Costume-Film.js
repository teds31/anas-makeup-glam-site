//imported dependencies
import React from "react"
import styled from "styled-components"

//imported images
import mirror from "../../images/mirror.png"
import joker from "../../images/joker.jpg"

//imported colors
import { lavender, periwinkle, sapphire } from "../../styles"

//component
const Cosplay = () => {
  return (
    <Wrapper className="d-flex align-items-center justify-content-around">
      <div className="col-sm-3">
        <div className="title-box d-flex align-items-center justify-content-center text-center flex-column">
          <img src={mirror} alt="vanity mirror"/>
          <p>Costume</p>
          <p>& Film</p>
        </div>
      </div>

      <div className="col-sm-4">
        <p style={{color: `${periwinkle}`}}>I also provide makeup artistry for costumes, cosplay and film. No matter the season, whether it's Halloween or Comi-Con, or looking to highlight your characters in your film or play, I can help you realize your costume.</p>
      </div>

      <div className="col-sm-4 d-flex justify-content-center">
        <img alt="girl with The Joker makeup" src={joker} style={{borderRadius: "15px", height: "225px", width: "auto"}} />
      </div>
    </Wrapper>
  )
}

//component-specific styling
const Wrapper = styled.div`
  padding: 30px;

  border-bottom: 1px solid ${lavender};

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
//export statement
export default Cosplay