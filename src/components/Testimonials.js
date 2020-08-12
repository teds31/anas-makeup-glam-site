//imported dependencies
import React from 'react'
import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel"

//imported req. stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

//imported colors
import { sapphire, lavender } from "../styles"

import belen from "../looks/belen-romero.jpg"
import elizabeth from "../looks/elizabeth-valencia.jpg"
import eva from "../images/eva-anderson.jpg"
import mariana from "../looks/mariana-salazar.jpg"

//component
const Testimonials = () => {
  return (
    <Wrapper className="d-flex flex-column align-items-center justify-content-center" style={{padding: "30px 0px"}}>
      <h1>Testimonials</h1>
      <Carousel className="d-flex align-items-center" style={{height: "auto", width: "100%"}} interval={9000}>
        <Carousel.Item>
          <div className="carousel-card d-flex align-items-center justify-content-center flex-column">
            <div className="pic-one" style={{backgroundImage: `url(${belen})`}}></div>

            <div className="container card-txt-holder d-flex justify-content-center flex-wrap text-center">
              <div className="row">
                <p style={{color: "white"}}>
                  <FaQuoteLeft className="quotes" /> If you are looking for someone to make you feel prettier and all flawless... Ana is your girl! I usually dont do much on my face specially because I dont know how to but Ana showed me how makeup can completely transform you and give you that little extra confidence that sometimes we need, and you can see how passionate she is about her work so for sure you will be getting the best job done from the best!!! Not only she has done my whole make up making me look and feel beautiful!!! She has also done some fantasy makeup on me on Halloween season and it was awesome! realistic and a clean work! Defenitely your makeup artist to go for!!! <FaQuoteRight className="quotes" />
                </p>
              </div>

              <h5>~ Belen Romero</h5>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card d-flex align-items-center justify-content-center flex-column">
            <div className="pic-two" style={{backgroundImage: `url(${elizabeth})`}}></div>

            <div className="container card-txt-holder d-flex justify-content-center flex-wrap text-center">
              <div className="row">
                <p style={{color: "white"}}>
                  <FaQuoteLeft className="quotes" /> If you are looking for a MUA for any event or occasion Ana is definitely the right person. I highly recommend because she is very professional and beyond talented. Love the fact that she makes sure to listen exactly to what you want before starting and the results are amazing. She makes you look and feel gorgeous. Not only will your makeup look flawless but it will also last all day long. Words cannot describe how pleased and happy I’m to get my makeup done by her. You will not only love your makeup but also her personality. She is the best, you will not be disappointed! <FaQuoteRight className="quotes" />
                </p>
              </div>

              <h5>~ Elizabeth Valencia</h5>
            </div>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div className="carousel-card d-flex align-items-center justify-content-center flex-column">
            <div className="pic-three" style={{backgroundImage: `url(${mariana})`}}></div>

            <div className="container card-txt-holder d-flex justify-content-center flex-wrap text-center">
              <div className="row">
                <p style={{color: "white"}}>
                  <FaQuoteLeft className="quotes" /> I needed to get my make up done for a photo shoot and I knew the right person for that! @anas_makeup_glam and needless to say she did a great job! <FaQuoteRight className="quotes" />
                </p>
              </div>

              <h5>~ Mariana Salazar</h5>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card d-flex align-items-center justify-content-center flex-column">
            <div className="pic-four" style={{backgroundImage: `url(${eva})`}}></div>

            <div className="container card-txt-holder d-flex justify-content-center flex-wrap text-center">
              <div className="row">
                <p style={{color: "white"}}>
                  <FaQuoteLeft className="quotes" /> Anna did my make up not too long ago and all I can say is MAD SKILLS!!! Her technique definitely wowed me, I never had my make up done as flawless and precise before! Not only she did a beautiful job but the endless smiles and upbeat personality made this an unforgettable experience for me!! thank you Anna. <FaQuoteRight className="quotes" />
                </p>
              </div>

              <h5>~ Eva Anderson</h5>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  )
}
//component-specific styling
const Wrapper = styled.div`
  background-color: ${sapphire};
  color: ${lavender};

  h1 {
    font-size: 3rem;
  }

  h5 {
    font-family: Homemade Apple;
  }

  .carousel-indicators {
    bottom: -40px;
  }

  .carousel-control-next, .carousel-control-prev {
    width: 5%;
  }

  .carousel-card {
    background-color: ${sapphire};

    height: 550px;
  }

  .card-txt-holder {
    height: 275px;
    padding: 35px 90px 0px 90px;
  }

  @media only screen and (max-width: 600px) {
    .card-txt-holder {
      height: 475px;
      padding: 35px 40px 0px 40px;
    }
    .carousel-card {
      height: 675px;
    }
  }

  .pic-one, .pic-two, .pic-three, .pic-four {
    border-radius: 100%;
    height: 200px;
    width: 200px;
  }

  .pic-one {
    background-size: 208px;
    background-position-x: 6px;
  }

  .pic-two {
    background-size: 202px;
    background-position-y: -75px;
    background-position-x: -2px;
  }

  .pic-three {
    background-size: 270px;
    background-position-x: -44px;
    background-position-y: -4px;
  }

  .pic-four {
    background-size: cover;
    background-position-x: 2px;
  }

  .quotes {
    position: relative;
    bottom: 5px;
  }
`
//export statement
export default Testimonials