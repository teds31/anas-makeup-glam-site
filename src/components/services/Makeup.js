import React from "react"
import styled from "styled-components"

import brushes from "../../images/make-up-kit.png"
import { purple, lavender } from "../../styles"

const MUServices = () => {
  return (
    <Wrapper className="d-flex flex-column justify-content-around">
      <h2 style={{color: `${purple}`}} className="col-sm-12">Services</h2>
      <div className="row">
        <div className="col-sm-3">
          <div className="title-box">
            <img src={brushes} alt="makeup brushes"/>
            <p>Makeup Glam</p>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Day Makeup / Maquillage de Dia ...............................................................................</li>
            <li>Cut Crease (or) Glitter .................................................................................................</li>
            <li>Full Eye Glam / Glamour Completo ...........................................................................</li>
            <li>Photo Shoots / Sección de Fotografía .........................................................................</li>
            <li>Strip Lashes / Pestañas ...............................................................................................</li>
          </ul>
        </div>
        <div className="col-sm-2">
          <ul>
            <li>$50</li>
            <li>$65</li>
            <li>$75</li>
            <li>$75</li>
            <li>$10</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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

  ul {
    list-style: none;
    margin: 0px;
    li {
      margin: 10px;
    }
  }

  .row {
    align-items: center;
    padding: 30px;
  }
`

export default MUServices