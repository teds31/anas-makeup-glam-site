//imported dependencies
import React from "react"
import styled from "styled-components"

//imported images
import mirror from "../../images/mirror.png"
import joker from "../../looks/joker.jpg"

//imported colors
import { periwinkle } from "../../styles"

//component
const Cosplay = () => {
  return (
    <Wrapper className="d-flex align-items-center justify-content-around flex-wrap">
      <div className="col-sm-3 d-flex justify-content-center">
        <div className="title-box d-flex align-items-center justify-content-center text-center flex-column">
          <img src={mirror} alt="vanity mirror"/>
          <p className="title">Costume</p>
          <p className="title">& Film</p>
        </div>
      </div>

      <div className="col-sm-4 text-center" style={{margin: "25px 0px"}}>
        <p style={{color: `${periwinkle}`}}>I also provide makeup artistry for costumes, cosplay and film. No matter the season! Whether it's Halloween, <em>Comic-Con</em>, or you're simply looking to highlight your characters in your film or play, I can help you realize your costume.</p>
      </div>

      <div className="col-sm-4 d-flex justify-content-center">
        <img alt="girl with The Joker makeup" src={joker} style={{borderRadius: "15px", height: "225px", width: "auto"}} />
      </div>
    </Wrapper>
  )
}

//component-specific styling
const Wrapper = styled.div`
  margin: 45px 0px;
`
//export statement
export default Cosplay