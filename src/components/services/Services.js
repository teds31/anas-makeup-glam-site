import React from "react"

import styled from "styled-components"

import Makeup from "./Makeup"
import MMobile from "./MakeupMobile"
import Hair from "./Hair"
import HMobile from "./HairMobile"
import Cosplay from "./Costume-Film"
import CMobile from "./CostumeMobile"

import { sapphire } from "../../styles"

const Services = () => {
  return (
    <Wrapper id="services" className="d-flex flex-column">
      <div className="col-sm-12 d-flex justify-content-center" style={{padding: "25px"}}>
        <h1 style={{color: `${sapphire}`, fontSize: "3rem"}}>Services</h1>
      </div>

      <Makeup id="makeup" />
      <MMobile id="makeup-mobile" />

      <Hair id="hair" />
      <HMobile id="hair-mobile" />

      <Cosplay id="cosplay" />
      <CMobile id="cosplay-mobile" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    #makeup-mobile {
      display: none;
    }

    #hair-mobile {
      display: none;
    }

    #cosplay-mobile {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    #makeup {
      display: none;
    }

    #hair {
      display: none;
    }

    #cosplay {
      display: none;
    }
  }
`

export default Services