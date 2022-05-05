import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import About from "../components/About"
import Mini from "../components/portfolio/MiniPortfolio"
import Testimonials from "../components/Testimonials"
import Services from "../components/services/Services"
import Quote from "../components/QuoteBanner"
import Contact from "../components/Contact"

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
        <div className="d-flex justify-content-center flex-column text-center">
          <p>
            <a href="tel:702-381-3158">(702) 347-0858</a> |{" "}
            <a href="mailto: booking@anasmakeupglam.com">
              booking@anasmakeupglam.com
            </a>
          </p>
        </div>
      </main>
    </Layout>
  )
}
