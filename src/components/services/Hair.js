//imported dependencies
import React from "react"
import styled from "styled-components"

//imported images
import blowdryer from "../../images/hair-dryer.png"
import hair from "../../looks/hair-and-makeup.png"

//imported colors
import { lavender, periwinkle, sapphire } from "../../styles"

//component
const Hair = () => {
  return (
    <Wrapper className="d-flex align-items-center justify-content-around flex-wrap">
      <div className="col-sm-3">
        <div className="title-box d-flex align-items-center justify-content-center text-center flex-column">
          <img src={blowdryer} alt="blow dryer"/>
          <p>Hair Styling Consultations</p>
        </div>
      </div>

      <div style={{color: `${periwinkle}`, margin: "25px 0px"}} className="col-sm-4 text-center">
        <p>Looking to have your hair your glow up?</p>
        <p>I also provide consultations for styling and beauty. Look your very best at any event, or just a lovely night out on the town! Please inquire about how my consultations work.</p>
      </div>

      <div className="col-sm-4 d-flex justify-content-center">
        <img alt="placeholder" src={hair} style={{borderRadius: "15px", height: "225px", width: "auto"}} />
      </div>
    </Wrapper>
  )
}

//component-specific styling
const Wrapper = styled.div`
  border-bottom: 1px solid ${lavender};
  padding: 30px;

  .title-box {
    background-color: ${lavender};

    margin: 0px 50px;

    width: 225px;
    height: 225px;

    font-size: 34px;

    border-radius: 18px;

    img {
      height: 64px;
      width: 64px;
    }

    p {
      margin: 0;
      color: ${sapphire};
    }
  }
`
//export statement
export default Hair