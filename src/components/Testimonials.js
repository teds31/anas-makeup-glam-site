import React from 'react'
import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css'

const Testimonials = () => {
  return (
    <Wrapper className="d-flex align-items-center justify-content-center" >
      <Carousel className="d-flex align-items-center" style={{height: "auto", width: "100%"}} interval={9000}>
        <Carousel.Item style={{backgroundColor: "pink"}}>
          <div className="carousel-card">
            <h2>hello</h2>
            <img src="https://www.placehold.it/200x200" alt="First slide" />
          </div>
        </Carousel.Item>

        <Carousel.Item style={{backgroundColor: "red"}}>
          <div className="carousel-card">
            <h2>hello</h2>
            <img src="https://www.placehold.it/200x200" alt="First slide" />
          </div>
        </Carousel.Item>

        <Carousel.Item style={{backgroundColor: "lavender"}}>
          <div className="carousel-card">
            <h2>hello</h2>
            <img src="https://www.placehold.it/200x200" alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .carousel-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 350px;
  }
`

export default Testimonials