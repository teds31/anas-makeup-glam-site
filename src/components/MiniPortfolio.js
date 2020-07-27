//imported dependencies
import React from "react"
import styled from "styled-components"

//imported colors
import { lavender, periwinkle } from "../styles"

//imported images
import gold from "../images/gold-dress.jpeg"
import red from "../images/red-dress-3.jpg"
import wedding from "../images/wedding-1.jpg"
import white from "../images/white-dress-5.jpg"
import weddingTwo from "../images/wedding-dress.jpg"

//component
const Mini = () => {
  return (
    <Wrapper className="d-flex align-items-center flex-column">
      <div className="d-flex justify-content-between">
        <div className="pic-one"></div>
        <div className="pic-two"></div>
        <div className="pic-three"></div>
        <div className="pic-four"></div>
        <div className="pic-five"></div>
      </div>
      <button>Portfolio</button>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.div`
  background-color: ${lavender};
  padding: 1.5rem;

  .pic-one, .pic-two, .pic-three, .pic-four, .pic-five {
    height: 200px;
    width: 200px;
    border-radius: 100%;
    margin: 25px 35px;
  }

  .pic-one {
    background-image: url(${gold});
    background-size: 229px;
    background-position-x: -10px;
    background-position-y: -20px;
  }

  .pic-two {
    background-image: url(${red});
    background-size: 425px;
    background-position-x: -108px;
    background-position-y: -54px;
  }

  .pic-three {
    background-image: url(${wedding});
    background-size: 330px;
    background-position-x: -69px;
    background-position-y: -8px;
  }

  .pic-four {
    background-image: url(${white});
    background-size: 415px;
    background-position-x: -95px;
    background-position-y: -10px;
  }

  .pic-five {
    background-image: url(${weddingTwo});
    background-size: 575px;
    background-position-x: -275px;
    background-position-y: -15px;
  }

  button {
    color: ${lavender};
    background-color: ${periwinkle};
    
    width: 125px;
    height: 45px;

    border: none;
    border-radius: 5px;
  }
`
//export statement
export default Mini