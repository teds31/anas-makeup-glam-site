//imported dependencies
import React from "react"
import styled from "styled-components"

//imported images
import ana from "../images/ana.jpg"
import stroke from "../images/paint-stroke.png"

import { sapphire } from "../styles"

//component
const About = () => {
  return (
    <Wrapper id="about" className="d-flex justify-content-around flex-wrap">
      <div className="img-holder col-lg-6">
        <img src={ana} alt="Ana"/>
      </div>

      <div className="col-lg-5 text-center">
        <p>
          Hello, my name is Ana and I'm a certified makeup artist based in beautiful Las Vegas, Nevada.
        </p>

        <p>
          For as long as I can remember, makeup and glamour have been a passion of mine. What once started as a hobby in high school, doing makeovers for my friends, I soon realized the transformation they were experiencing. The work I was doing was turning them into beautiful, confident women who were ready to take on the world. I discovered that this would be my calling in life and decided to follow my dreams by attending a professional school right here in Las Vegas.
        </p>

        <p>
          I know that makeup is my art and the human face is my canvas. I am intrested by every person I see, and harmonizing their inner beauty. I've had the pleasure of working with brides and models from <em>Quinceañera magazine</em>, Expos and Foundations for Runways, beauty pageants and photo shoots.
        </p>

      </div>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.div`
  background-image: url(${stroke});
  background-repeat: no-repeat;
  padding: 5rem 0;
  background-size: 55% 75%;
  background-position: 5% 50%;
  

  @media only screen and (max-width: 600px) {
    background-size: 125% 65%;
    background-position: 70% -40%;
    font-weight: 800;
    padding-top: 4rem;
  }

  color: ${sapphire};

  .col-lg-5 {
    padding: 0;
    padding-top: 20px;
    font-size: 16px;
  }

  .img-holder {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 285px;
      border-radius: 10px;
    }
  }
`
//export statement
export default About