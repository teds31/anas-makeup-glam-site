import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import About from "../components/About"
import Mini from "../components/portfolio/MiniPortfolio"
import Testimonials from "../components/Testimonials"
import Services from "../components/services/Services"
import Quote from "../components/QuoteBanner"
// import Contact from "../components/Contact"
import {purple } from "../styles"


export default () => {
  return (
    <Layout>
      <SEO title="Home" description="Ana's Makup Glam portfolio website." />
      <main>
        <Intro />
        <About />
        <Mini />
        <Testimonials />
        <Services />
        <Quote />
        <div className="d-flex justify-content-center flex-column text-center pt-4 pb-4">
                <h1 style={{color: `${purple}`, marginBottom: "15px", fontSize: "3rem"}}>Contact Me</h1>

          <p>Ready to get glammed up or have any questions? Call or send me a message!</p>
          <Wrapper id="contact-links">
            <a class="phone-link" href="tel:702-381-3158">(702) 347-0858</a>
            <br /><br />

            <a class="email-link" href="mailto: anasmakeup87@yahoo.com">
              AnasMakeup87@yahoo.com
            </a>
            </Wrapper>
        </div>
      </main>
    </Layout>
  )
}

const Wrapper = styled.div`
.phone-link, .email-link {
  font-size: 1.5rem;
  padding: 2rem 0;
};
`