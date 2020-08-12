import React from "react"
import styled from "styled-components"

import { sapphire } from "../../styles"
import silhouette from "../../images/silhouette.png"

const Sentimental = () => {
  return (
    <Wrapper className="container" style={{marginTop: "50px", marginBottom: "55px"}}>
      <div className="row align-items-center" style={{color: `${sapphire}`}}>
        <div className="col-sm-3">
          <img src={silhouette} alt="silhouette" />
        </div>
        <div className="col-lg-9 text-center">
          <p>
            I offer makeup services for special occasions, such as weddings, quinceañeras, or even putting your stamp on the world with a photoshoot; I bring professional high-end services to fit your needs. I always stay informed on the latest makeup trends that will bring your inner <strong>you</strong> out. Work with me and I will ensure quality, safety, and always an enjoyable, relaxing experience each time you book with me.
          </p>

          <p>
            Let me transform you into the best possible you.
          </p>
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    opacity: 0.2;
  }
`

export default Sentimental;