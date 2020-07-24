import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <Intro />
    </main>
  </Layout>
)

export default IndexPage
