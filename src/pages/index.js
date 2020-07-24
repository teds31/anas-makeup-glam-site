import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import About from "../components/About"
import Mini from "../components/MiniPortfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <Intro />
      <About />
      <Mini />
    </main>
  </Layout>
)

export default IndexPage
