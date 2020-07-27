//imported dependencies
import React from 'react'
import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel"

//imported req. stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'

//imported colors
import { sapphire, lavender } from "../styles"

//component
const Testimonials = () => {
  return (
    <Wrapper className="d-flex flex-column align-items-center justify-content-center" >
      <h2>Testimonials</h2>
      <Carousel className="d-flex align-items-center" style={{height: "auto", width: "100%"}} interval={9000}>
        <Carousel.Item>
          <div className="carousel-card d-flex align-items-center justify-content-center flex-column">
            <img src="https://www.placehold.it/200x200" alt="First slide" />

            <div className="card-txt-holder d-flex justify-content-center flex-wrap text-center">
              <p style={{color: "white"}}>If you are looking for someone to make you feel prettier and all flawless... Ana is your girl! I usually dont do much on my face specially because I dont know how to but Ana showed me how makeup can completely transform you and give you that little extra confidence that sometimes we need, and you can see how passionate she is about her work so for sure you will be getting the best job done from the best!!! Not only she has done my whole make up making me look and feel beautiful!!! She has also done some fantasy makeup on me on Halloween season and it was awesome! realistic and a clean work! Defenitely your makeup artist to go for!!!</p>

              <p>Belen Romero</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card d-flex align-items-center justify-content-center flex-column">
            <img src="https://www.placehold.it/200x200" alt="First slide" />

            <div className="card-txt-holder d-flex justify-content-center flex-wrap text-center">
              <p style={{color: "white"}}> If you are looking for a MUA for any event or occasion Ana is definitely the right person. I highly recommend because she is very professional and beyond talented. Love the fact that she makes sure to listen exactly to what you want before starting and the results are amazing. She makes you look and feel gorgeous. Not only will your makeup look flawless but it will also last all day long. Words cannot describe how pleased and happy I’m to get my makeup done by her. You will not only love your makeup but also her personality. She is the best, you will not be disappointed!</p>

              <p>Elizabeth Valencia</p>
            </div>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div className="carousel-card d-flex align-items-center justify-content-center flex-column">
            <img src="https://www.placehold.it/200x200" alt="First slide" />

            <div className="card-txt-holder d-flex justify-content-center flex-wrap text-center">
              <p style={{color: "white"}}>I needed to get my make up done for a photo shoot and I knew the right person for that! @anas_makeup_glam and needless to say she did a great job!</p>

              <p>Mariana Salazar</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-card d-flex align-items-center justify-content-center flex-column">
            <img src="https://www.placehold.it/200x200" alt="First slide" />

            <div className="card-txt-holder d-flex justify-content-center flex-wrap text-center">
              <p style={{color: "white"}}>Anna did my make up not too long ago and all I can say is MAD SKILLS!!! Her technique definitely wowed me, I never had my make up done as flawless and precise before! Not only she did a beautiful job but the endless smiles and upbeat personality made this an unforgettable experience for me!! thank you Anna.</p>
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
  padding: 30px;
  color: ${lavender};

  .carousel-card {
    background-color: ${sapphire};

    height: 550px;

    img {
      border-radius: 100%;
      margin: 35px;
    }
  }

  .card-txt-holder {
    height: 350px;
    
    padding: 0px 125px;
  }
`
//export statement
export default Testimonials