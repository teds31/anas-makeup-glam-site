//imported dependencies
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//imported colors
import { lavender, purple } from "../../styles"

//imported images
import gold from "../../looks/gold-dress.jpeg"
import red from "../../looks/red-dress-3.jpg"
import wedding from "../../looks/wedding-1.jpg"
import tiara from "../../looks/white-two.jpg"
import weddingTwo from "../../looks/wedding-dress.jpg"

//component
const Mini = () => {
  return (
    <Wrapper className="d-flex align-items-center flex-column">
      <div className="d-flex justify-content-center flex-wrap align-items-center">
        <div className="pic-one"></div>
        <div className="pic-two"></div>
        <div className="pic-three"></div>
        <div className="pic-four"></div>
        <div className="pic-five"></div>
      </div>
      <button><Link to="/portfolio">Portfolio</Link></button>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.div`
  background-color: ${lavender};
  padding: 4rem 1.5rem;

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
    background-image: url(${tiara});
    background-size: 345px;
    background-position-x: -110px;
    background-position-y: -40px;
  }

  .pic-five {
    background-image: url(${weddingTwo});
    background-size: 575px;
    background-position-x: -275px;
    background-position-y: -15px;
  }

  @media only screen and (max-width: 600px) {
    .pic-four, .pic-five {
      display: none;
    }
  }

  button {
    background-color: white;
    
    width: 125px;
    height: 45px;

    border: none;
    border-radius: 5px;
    
    a:link, a:visited, a:active {
      color: ${purple};
    }
  
    a {
      text-decoration: none;
    }
  }
`
//export statement
export default Mini