import React from "react"
import styled from "styled-components"
import ana from "../images/ana.jpg"
import stroke from "../images/paint-stroke.png"

const About = () => {
  return (
    <Wrapper>
      <div className="img-holder col-lg-6">
        <img src={ana} alt="Ana"/>
      </div>

      <div className="col-lg-5">
        <p>
          Hello, my name is Ana and I'm a certified makeup artist based in beautiful Las Vegas, Nevada.
        </p>

        <p>
          For as long as I can remember, makeup and glamour have been a passion of mine. What once started as a hobby in high school, doing makeovers for my friends, I soon realized the transformation they were experiencing. The work I was doing was turning them into beautiful, confident women who were ready to take on the world. I discovered that this would be my calling in life and decided to follow my dreams by attending <em>Rika Makeup Academy</em> right here in Las Vegas.
        </p>

        <p>
          I know that makeup is my art and the human face is my canvas. I am intrested by every person I see, and harmonizing their inner beauty. I've had the pleasure of working with brides and models from <em>Quinceañera magazine</em>, Expos and Foundations for Runways, beauty pageants and photo shoots.
        </p>

        <p>
          I offer makeup services for special occasions, such as weddings, quinceañeras, or even putting your stamp on the world with a photoshoot; I bring professional high-end services to fit your needs. I always stay informed on the latest makeup trends that will bring your inner <strong>you</strong> out. Work with me and I will ensure quality, safety, and always an enjoyable, relaxing experience each time you book with me. Let me transform you into the best possible you.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  background-image: url(${stroke});
  background-repeat: no-repeat;
  background-size: contain;
  
  padding: 2rem;

  .img-holder {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 285px;
    border-radius: 10px;
  }
`

export default About