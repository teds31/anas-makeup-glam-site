/*
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
*/
//imported dependecies
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//imported components
import Header from "./header"
import Footer from "./Footer"

//imported stylesheets
import "../styles/layout.css"
import "../styles/bootstrap-grid.css"

//component passing in props
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
       <Header siteTitle={data.site.siteMetadata.title}/> 
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
//export statement
export default Layout