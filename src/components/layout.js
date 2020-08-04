//imported dependecies
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

//imported components
import Header from "./header"
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

  // function scrollFunction() {
  //   //grabbing button
  //   const mybutton = document.getElementById("myBtn");

  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }

  // // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function() {scrollFunction()};

  // // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }

  return (
    <Wrapper>
       <Header siteTitle={data.site.siteMetadata.title}/> 
        <main>
          {children}
          {/* <button onClick={topFunction} alt="scroll to top" id="myBtn"><FaArrowCircleUp /></button> */}
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
    display: none; 

    position: fixed; 
    bottom: 20px; 
    right: 30px; 

    z-index: 99; 

    border: none; 
    border-radius: 100%;

    outline: none; 

    background-color: white;
    color: ${lavender};

    cursor: pointer;

    height: 40px;
    width: 40px;

    font-size: 25px; 
  }

  #myBtn:hover {
    background-color: #555;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
//export statement
export default Layout