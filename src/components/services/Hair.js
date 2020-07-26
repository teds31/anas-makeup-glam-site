//imported dependencies
import React from "react"
import styled from "styled-components"

//imported images
import blowdryer from "../../images/hair-dryer.png"

//imported colors
import { lavender } from "../../styles"

//component
const Hair = () => {
  return (
    <Wrapper className="row d-flex align-items-center justify-content-around">
      <div className="col-sm-3">
        <div className="title-box d-flex align-items-center justify-content-around flex-column">
          <img src={blowdryer} alt="blow dryer"/>
          <p>Hair Styling Consultations</p>
        </div>
      </div>

      <div className="col-sm-4">
        <p>Looking to have your hair your glow up?</p>
        <p>I also provide consultations for styling and beauty. Look your very best at any event, or just a lovely night out on the town! Please inquire about how my consultations work.</p>
      </div>

      <div className="col-sm-4 d-flex justify-content-center">
        <img alt="placeholder" src="https://www.placehold.it/200x200" style={{borderRadius: "15px", height: "225px", width: "auto"}} />
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
    }
  }
`
//export statement
export default Hair