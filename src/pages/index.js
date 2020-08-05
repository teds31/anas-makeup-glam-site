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
      <SEO title="Home" />
      <main>
        <Intro />
        <About />
        <Mini />
        <Testimonials />
        <Services />
        <Quote />
        <Contact />
      </main>
    </Layout>
  )
}
