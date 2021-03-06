import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Main from "../components/portfolio/Main"
import Contact from "../components/Contact"

const Portfolio = () => {

  return (
    <Layout>
      <SEO title="Portfolio" description="This is Ana's portfolio page" />
      <main>
        <Main />
        <Contact />
      </main>
    </Layout>
  )
}

export default Portfolio