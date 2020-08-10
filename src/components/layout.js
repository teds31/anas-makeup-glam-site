//imported dependecies
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ScrollToTop from "react-scroll-up"

//imported components
import Navbar from "./navbar/Navbar"
import Footer from "./Footer"

//imported stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaArrowCircleUp } from "react-icons/fa"

import { lavender } from "../styles"

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
    <Wrapper>
       <Navbar siteTitle={data.site.siteMetadata.title}/> 
        <main>
          {children}
          <ScrollToTop  showUnder={160}>
            <span id="myBtn"><FaArrowCircleUp /></span>
          </ScrollToTop>
        </main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
  font-family: Font Two;

  h1, h2, h3, h4, h5, h6 {
    font-family: Font One;
  }

  #myBtn {
    color: ${lavender};
    font-size: 30px; 
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
//export statement
export default Layout