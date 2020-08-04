import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Main from "../components/portfolio/Main"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
      <main>
        <Main />
      </main>
  </Layout>
)

export default Portfolio