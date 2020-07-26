import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import About from "../components/About"
import Mini from "../components/MiniPortfolio"
import MUServices from "../components/services/Makeup"
import HServices from "../components/services/Hair"
import CosServices from "../components/services/Costume-Film"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <Intro />
      <About />
      <Mini />
      <MUServices />
      <HServices />
      <CosServices />
    </main>
  </Layout>
)

export default IndexPage
