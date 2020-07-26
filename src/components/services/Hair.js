import React from "react"
import styled from "styled-components"

import blowdryer from "../../images/hair-dryer.png"
import { lavender } from "../../styles"

const Hair = () => {
  return (
    <Wrapper className="row">
      <div className="col-sm-3">
        <div className="title-box">
          <img src={blowdryer} alt="blow dryer"/>
          <p>Hair Styling Consultations</p>
        </div>
      </div>

      <div className="col-sm-3">
        <p>Looking to have your hair your glow up?</p>
        <p>I also provide consultations for styling and beauty. Look your very best at any event, or just a lovely night out on the town! Please inquire about how my consultations work.</p>
      </div>

      <div className="col-sm-3">
        <img alt="placeholder" src="https://www.placehold.it/200x200" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${lavender};
  align-items: center;
  padding: 30px;

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
`

export default Hair