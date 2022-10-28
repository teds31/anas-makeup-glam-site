//imported dependencies
import React from "react"
import styled from "styled-components"

//imported images
import brushes from "../../images/make-up-kit.png"
import work from "../../images/ana-working.jpg"

//imported colors
import { periwinkle, darkBlue, sapphire } from "../../styles"

//component
const Makeup = () => {
  return (
    <Wrapper>
      <div className="col-sm-12 d-flex justify-content-center" style={{padding: "24px"}}>
        <h1 style={{color: `${sapphire}`, fontSize: "3rem"}}>Services</h1>
      </div>
      <div className="makeup d-flex align-items-center justify-content-around flex-wrap pl-8">
        <div className="col-sm-3 d-flex justify-content-center">
          <div className="title-box d-flex align-items-center justify-content-center flex-column">
            <img src={brushes} alt="makeup brushes"/>
            <p className="title">Makeup Glam</p>
          </div>
        </div>

        <div style={{padding: "5px", color: `${periwinkle}`}} className="col-sm-4">
          <ul className="text-center">
            <li>Day Makeup / Maquillage de Dia </li>
            <li>Cut Crease (or) Glitter </li>
            <li>Full Eye Glam / Glamour Completo </li>
            <li>Photo Shoots / Sección de Fotografía </li>
            <li>Strip Lashes / Pestañas </li>
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
  span {
    color: ${darkBlue};
    float: right;
  }

  ul {
    list-style: none;

    margin: 25px 0px;
    padding: 0px;

    li {
      margin: 10px;
      font-size: 1.25rem;
    }
  }

  .makeup {
    margin: 40px 0px;
    padding-left: 8rem;
  }

  @media (max-width: 768px) {
    .makeup{
    padding-left: 0px;
  }
}
`
//export statement
export default Makeup