//imported dependencies
import React from "react"
import styled from "styled-components"

//imported images
import brushes from "../../images/make-up-kit.png"
import work from "../../images/ana-working.jpg"

//imported colors
import { lavender, periwinkle, darkBlue, sapphire } from "../../styles"

//component
const Makeup = () => {
  return (
    <Wrapper>
      <div className="col-sm-12 d-flex justify-content-center" style={{padding: "25px"}}>
        <h1 style={{color: `${sapphire}`, fontSize: "3rem"}}>Services</h1>
      </div>
      <div className="makeup d-flex align-items-center justify-content-around flex-wrap">
        <div className="col-sm-3">
          <div className="title-box d-flex align-items-center justify-content-center flex-column">
            <img src={brushes} alt="makeup brushes"/>
            <p>Makeup Glam</p>
          </div>
        </div>

        <div style={{padding: "5px", color: `${periwinkle}`}} className="col-sm-4">
          <ul>
            <li>Day Makeup / Maquillage de Dia: <span>$50</span> </li>
            <li>Cut Crease (or) Glitter: <span>$65</span> </li>
            <li>Full Eye Glam / Glamour Completo: <span>$75</span> </li>
            <li>Photo Shoots / Sección de Fotografía: <span>$75</span> </li>
            <li>Strip Lashes / Pestañas: <span>$10</span> </li>
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
    }
  }

  .makeup {
    padding: 30px;
    padding-top: 10px;
  }
`
//export statement
export default Makeup