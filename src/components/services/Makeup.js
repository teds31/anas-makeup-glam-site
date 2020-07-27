//imported dependencies
import React from "react"
import styled from "styled-components"

//imported images
import brushes from "../../images/make-up-kit.png"
import work from "../../images/ana-working.jpg"

//imported colors
import { purple, lavender, periwinkle, darkBlue, sapphire } from "../../styles"

//component
const MUServices = () => {
  return (
    <Wrapper className="d-flex flex-column">
      <div className="col-sm-12 d-flex justify-content-center" style={{padding: "25px"}}>
        <h1 style={{color: `${purple}`}}>Services</h1>
      </div>

      <div className="makeup d-flex align-items-center justify-content-around">
        <div className="col-sm-3">
          <div className="title-box d-flex align-items-center justify-content-around flex-column">
            <img src={brushes} alt="makeup brushes"/>
            <p>Makeup Glam</p>
          </div>
        </div>

        <div style={{color: `${periwinkle}`}} className="col-sm-3">
          <ul>
            <li>Day Makeup / Maquillage de Dia </li>
            <li>Cut Crease (or) Glitter </li>
            <li>Full Eye Glam / Glamour Completo </li>
            <li>Photo Shoots / Sección de Fotografía </li>
            <li>Strip Lashes / Pestañas </li>
          </ul>
        </div>

        <div style={{color: `${darkBlue}`}} className="col-sm-1">
          <ul>
            <li>$50</li>
            <li>$65</li>
            <li>$75</li>
            <li>$75</li>
            <li>$10</li>
          </ul>
        </div>

        <div className="col-sm-4 d-flex justify-content-center">
          <img alt="Ana doing someone's makeup" src={work} style={{borderRadius: "15px", height: "225px", width: "auto"}} />
        </div>
      </div>
    </Wrapper>
  )
}

//component-specific styling
const Wrapper = styled.div`
  border-bottom: 1px solid ${lavender};

  .title-box {
    background-color: ${lavender};

    width: 225px;
    height: 225px;

    margin: 0px 50px;

    font-size: 34px;

    border-radius: 18px;

    img {
      height: 64px;
      width: 64px;
    }

    p {
      color: ${sapphire};
      margin: 0;
    }
  }

  ul {
    list-style: none;

    margin: 0px;
    padding: 0px;

    li {
      margin: 10px;
    }
  }

  .makeup {
    padding: 30px;
    padding-top: 10px;
  }
`
//export statement
export default MUServices