import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <Intro />
      <About />
    </main>
  </Layout>
)

export default IndexPage
